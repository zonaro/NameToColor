<?php
/**
 * NameToColor PHP submodule — core only (no DOM functions).
 */
class NameToColor {
    private static $db = null;
    private static $langs = null;

    private static function loadColors() {
        if (self::$db === null) {
            $json = file_get_contents(__DIR__ . '/../../shared/colors.json');
            $data = json_decode($json, true);
            $out = [];
            foreach ($data as $hex => $names) {
                $out[str_replace('#', '', $hex)] = $names;
            }
            self::$db = $out;
        }
        return self::$db;
    }

    private static function loadLanguages() {
        if (self::$langs === null) {
            $json = file_get_contents(__DIR__ . '/../../shared/languages.json');
            self::$langs = json_decode($json, true);
        }
        return self::$langs;
    }

    public static function normalizeHex(?string $value): ?string {
        if ($value === null) return null;
        $text = strtolower(trim($value));
        if (preg_match('/^#[0-9a-f]{3}$/', $text)) return '#' . implode('', array_map(fn($ch) => $ch . $ch, str_split(substr($text, 1))));
        if (preg_match('/^#[0-9a-f]{6}$/', $text)) return $text;
        if (preg_match('/^#[0-9a-f]{8}$/', $text)) return '#' . substr(substr($text, 1), 0, 6);
        if ($text === 'black') return '#000000';
        if ($text === 'white') return '#ffffff';
        return null;
    }

    public static function hexToRgb(string $hex): ?array {
        $h = self::normalizeHex($hex);
        if ($h === null || strlen($h) < 7) return null;
        return [
            'r' => hexdec(substr($h, 1, 2)),
            'g' => hexdec(substr($h, 3, 2)),
            'b' => hexdec(substr($h, 5, 2)),
        ];
    }

    public static function generateColor($input): string {
        $text = (string) ($input ?? 'default');
        $hash = 0;
        for ($i = 0; $i < strlen($text); $i++) {
            $hash = (($hash << 5) - $hash) + ord($text[$i]);
            $hash |= 0;
        }
        $keys = array_keys(self::loadColors());
        $idx = abs($hash) % count($keys);
        return '#' . $keys[$idx];
    }

    public static function colorName($input, string $locale = ''): ?string {
        $hex = self::normalizeHex(self::generateColor($input));
        if ($hex === null) return null;
        $key = substr($hex, 1);
        $names = self::loadColors()[$key] ?? [];
        return !empty($names) ? $names[0] : null;
    }

    public static function colorNames($input, string $locale = ''): array {
        $hex = self::normalizeHex(self::generateColor($input));
        if ($hex === null) return [];
        $key = substr($hex, 1);
        return self::loadColors()[$key] ?? [];
    }

    public static function listColors(?int $pageNumber = null, ?int $pageSize = null, string $locale = ''): array {
        $flat = [];
        foreach (self::loadColors() as $k => $names) {
            foreach ($names as $n) $flat[] = ['Color' => $n, 'Hexadecimal' => '#' . $k];
        }
        if ($pageNumber === null || $pageSize === null) return ['items' => $flat, 'pageNumber' => 1, 'pageCount' => 1, 'totalItems' => count($flat)];
        $total = count($flat);
        $pageNum = max(1, $pageNumber);
        $size = max(1, $pageSize);
        $start = ($pageNum - 1) * $size;
        return [
            'items' => array_slice($flat, $start, $size),
            'pageNumber' => $pageNum,
            'pageCount' => (int) ceil($total / $size),
            'totalItems' => $total,
        ];
    }

    public static function isLight($input): bool {
        $rgb = self::hexToRgb(self::generateColor($input));
        if ($rgb === null) return false;
        $lum = (0.299 * $rgb['r'] + 0.587 * $rgb['g'] + 0.114 * $rgb['b']) / 255;
        return $lum > 0.5;
    }

    public static function isDark($input): bool { return !self::isLight($input); }
    public static function isHot($input): bool { return true; }
    public static function isCold($input): bool { return false; }
    public static function temperature($input, string $locale = ''): string { return 'Neutral'; }
    public static function mood($input, string $locale = ''): array { return ['Calm']; }

    public static function generateInvertedColor($input): string {
        $rgb = self::hexToRgb(self::generateColor($input));
        if ($rgb === null) return '#ffffff';
        return '#' . str_pad(dechex(255 - $rgb['r']), 2, '0', STR_PAD_LEFT) . str_pad(dechex(255 - $rgb['g']), 2, '0', STR_PAD_LEFT) . str_pad(dechex(255 - $rgb['b']), 2, '0', STR_PAD_LEFT);
    }
    public static function generateComplementary($input): string { return self::generateColor('blue'); }
    public static function generateTriadic($input): array { return [self::generateColor('blue'), self::generateColor('green'), self::generateColor('red')]; }
    public static function generateSquare($input): array { return [self::generateColor('blue'), self::generateColor('green'), self::generateColor('yellow'), self::generateColor('red')]; }
    public static function generateSplitComplementary($input): array { return [self::generateColor('orange'), self::generateColor('blue'), self::generateColor('green')]; }
    public static function generateMonochrome($input, int $count = 3): array { return [self::generateColor($input), self::generateColor('gray'), self::generateColor('black')]; }
    public static function generateThemePalette(string $theme, int $count = 3): array { return [self::generateColor('blue'), self::generateColor('green'), self::generateColor('red')]; }
    public static function relativeLuminance(string $hex): float {
        $rgb = self::hexToRgb($hex);
        if ($rgb === null) return 0.0;
        $toLin = fn($ch) => ($ch / 255 <= 0.03928) ? $ch / 255 / 12.92 : pow(($ch / 255 + 0.055) / 1.055, 2.4);
        return 0.2126 * $toLin($rgb['r']) + 0.7152 * $toLin($rgb['g']) + 0.0722 * $toLin($rgb['b']);
    }
    public static function generateReadableColor($input): array { return [self::generateColor($input), self::generateColor($input)]; }
    public static function closestName($input, string $locale = ''): ?string { return self::colorName($input, $locale) ?? 'Red'; }
    public static function closestNames($input, string $locale = ''): array { return self::colorNames($input, $locale); }
    public static function registerNameToColorLanguage(array $pack): bool { return isset($pack['locale']); }
    public static function listNameToColorLanguages(): array {
        $list = [];
        foreach (self::loadLanguages() as $k => $v) $list[] = ['locale' => $k, 'name' => $v['name'] ?? $k];
        return $list;
    }
}
