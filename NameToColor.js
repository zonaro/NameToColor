/**
 * Internal list of known colors with name(s) and hexadecimal values.
 * Each entry's Color property is an array of one or more names for the same hex value.
 * @type {Array<{Color: string[], Hexadecimal: string}>}
 */
const colorDatabase = [
    {
        "Color": [
            "Abbey"
        ],
        "Hexadecimal": "#4C4F56"
    },
    {
        "Color": [
            "Absolute Zero"
        ],
        "Hexadecimal": "#0048BA"
    },
    {
        "Color": [
            "Acadia"
        ],
        "Hexadecimal": "#1B1404"
    },
    {
        "Color": [
            "Acapulco"
        ],
        "Hexadecimal": "#7CB0A1"
    },
    {
        "Color": [
            "Acid Green"
        ],
        "Hexadecimal": "#B0BF1A"
    },
    {
        "Color": [
            "Aero"
        ],
        "Hexadecimal": "#7CB9E8"
    },
    {
        "Color": [
            "Aero Blue"
        ],
        "Hexadecimal": "#C9FFE5"
    },
    {
        "Color": [
            "Aero Blue 2"
        ],
        "Hexadecimal": "#C0E8D5"
    },
    {
        "Color": [
            "Affair"
        ],
        "Hexadecimal": "#714693"
    },
    {
        "Color": [
            "African Violet"
        ],
        "Hexadecimal": "#B284BE"
    },
    {
        "Color": [
            "Air Superiority Blue"
        ],
        "Hexadecimal": "#72A0C1"
    },
    {
        "Color": [
            "Akaroa"
        ],
        "Hexadecimal": "#D4C4A8"
    },
    {
        "Color": [
            "Alabaster"
        ],
        "Hexadecimal": "#FAFAFA"
    },
    {
        "Color": [
            "Alabaster 2"
        ],
        "Hexadecimal": "#EDEAE0"
    },
    {
        "Color": [
            "Albescent White"
        ],
        "Hexadecimal": "#F5E9D3"
    },
    {
        "Color": [
            "Algae Green"
        ],
        "Hexadecimal": "#93DFB8"
    },
    {
        "Color": [
            "Alice Blue"
        ],
        "Hexadecimal": "#F0F8FF"
    },
    {
        "Color": [
            "Alloy Orange"
        ],
        "Hexadecimal": "#C46210"
    },
    {
        "Color": [
            "Allports"
        ],
        "Hexadecimal": "#0076A3"
    },
    {
        "Color": [
            "Almond"
        ],
        "Hexadecimal": "#EED9C4"
    },
    {
        "Color": [
            "Almond 2"
        ],
        "Hexadecimal": "#EFDECD"
    },
    {
        "Color": [
            "Almond Frost"
        ],
        "Hexadecimal": "#907B71"
    },
    {
        "Color": [
            "Alpine"
        ],
        "Hexadecimal": "#AF8F2C"
    },
    {
        "Color": [
            "Alto"
        ],
        "Hexadecimal": "#DBDBDB"
    },
    {
        "Color": [
            "Aluminium"
        ],
        "Hexadecimal": "#A9ACB6"
    },
    {
        "Color": [
            "Amaranth"
        ],
        "Hexadecimal": "#E52B50"
    },
    {
        "Color": [
            "Amaranth (M&P)"
        ],
        "Hexadecimal": "#9F2B68"
    },
    {
        "Color": [
            "Amaranth Pink"
        ],
        "Hexadecimal": "#F19CBB"
    },
    {
        "Color": [
            "Amaranth Purple"
        ],
        "Hexadecimal": "#AB274F"
    },
    {
        "Color": [
            "Amaranth Red"
        ],
        "Hexadecimal": "#D3212D"
    },
    {
        "Color": [
            "Amazon"
        ],
        "Hexadecimal": "#3B7A57"
    },
    {
        "Color": [
            "Amber"
        ],
        "Hexadecimal": "#FFBF00"
    },
    {
        "Color": [
            "Amber (SAE/ECE)"
        ],
        "Hexadecimal": "#FF7E00"
    },
    {
        "Color": [
            "Americano"
        ],
        "Hexadecimal": "#87756E"
    },
    {
        "Color": [
            "Amethyst"
        ],
        "Hexadecimal": "#9966CC"
    },
    {
        "Color": [
            "Amethyst Smoke"
        ],
        "Hexadecimal": "#A397B4"
    },
    {
        "Color": [
            "Amour"
        ],
        "Hexadecimal": "#F9EAF3"
    },
    {
        "Color": [
            "Amulet"
        ],
        "Hexadecimal": "#7B9F80"
    },
    {
        "Color": [
            "Anakiwa"
        ],
        "Hexadecimal": "#9DE5FF"
    },
    {
        "Color": [
            "Android Green"
        ],
        "Hexadecimal": "#3DDC84"
    },
    {
        "Color": [
            "Antique Brass"
        ],
        "Hexadecimal": "#CD9575"
    },
    {
        "Color": [
            "Antique Brass 2"
        ],
        "Hexadecimal": "#C88A65"
    },
    {
        "Color": [
            "Antique Bronze"
        ],
        "Hexadecimal": "#704A07"
    },
    {
        "Color": [
            "Antique Bronze 2"
        ],
        "Hexadecimal": "#665D1E"
    },
    {
        "Color": [
            "Antique Fuchsia"
        ],
        "Hexadecimal": "#915C83"
    },
    {
        "Color": [
            "Antique Ruby"
        ],
        "Hexadecimal": "#841B2D"
    },
    {
        "Color": [
            "Antique White"
        ],
        "Hexadecimal": "#FAEBD7"
    },
    {
        "Color": [
            "Anzac"
        ],
        "Hexadecimal": "#E0B646"
    },
    {
        "Color": [
            "Ao"
        ],
        "Hexadecimal": "#008000"
    },
    {
        "Color": [
            "Apache"
        ],
        "Hexadecimal": "#DFBE6F"
    },
    {
        "Color": [
            "Apple"
        ],
        "Hexadecimal": "#4FA83D"
    },
    {
        "Color": [
            "Apple Blossom"
        ],
        "Hexadecimal": "#AF4D43"
    },
    {
        "Color": [
            "Apple Green"
        ],
        "Hexadecimal": "#8DB600"
    },
    {
        "Color": [
            "Apple Green 2"
        ],
        "Hexadecimal": "#E2F3EC"
    },
    {
        "Color": [
            "Apricot"
        ],
        "Hexadecimal": "#EB9373"
    },
    {
        "Color": [
            "Apricot Peach"
        ],
        "Hexadecimal": "#FBCEB1"
    },
    {
        "Color": [
            "Apricot White"
        ],
        "Hexadecimal": "#FFFEEC"
    },
    {
        "Color": [
            "Aqua",
            "Cyan",
            "Spanish Sky Blue"
        ],
        "Hexadecimal": "#00FFFF"
    },
    {
        "Color": [
            "Aqua Deep"
        ],
        "Hexadecimal": "#014B43"
    },
    {
        "Color": [
            "Aqua Haze"
        ],
        "Hexadecimal": "#EDF5F5"
    },
    {
        "Color": [
            "Aqua Island"
        ],
        "Hexadecimal": "#A1DAD7"
    },
    {
        "Color": [
            "Aqua Spring"
        ],
        "Hexadecimal": "#EAF9F5"
    },
    {
        "Color": [
            "Aqua Squeeze"
        ],
        "Hexadecimal": "#E8F5F2"
    },
    {
        "Color": [
            "Aquamarine"
        ],
        "Hexadecimal": "#7FFFD4"
    },
    {
        "Color": [
            "Aquamarine Blue"
        ],
        "Hexadecimal": "#71D9E2"
    },
    {
        "Color": [
            "Arapawa"
        ],
        "Hexadecimal": "#110C6C"
    },
    {
        "Color": [
            "Arctic Lime"
        ],
        "Hexadecimal": "#D0FF14"
    },
    {
        "Color": [
            "Armadillo"
        ],
        "Hexadecimal": "#433E37"
    },
    {
        "Color": [
            "Army Green"
        ],
        "Hexadecimal": "#4B5320"
    },
    {
        "Color": [
            "Arrowtown"
        ],
        "Hexadecimal": "#948771"
    },
    {
        "Color": [
            "Artichoke"
        ],
        "Hexadecimal": "#8F9779"
    },
    {
        "Color": [
            "Arylide Yellow",
            "Hansa Yellow"
        ],
        "Hexadecimal": "#E9D66B"
    },
    {
        "Color": [
            "Ash"
        ],
        "Hexadecimal": "#C6C3B5"
    },
    {
        "Color": [
            "Ash Gray"
        ],
        "Hexadecimal": "#B2BEB5"
    },
    {
        "Color": [
            "Asparagus"
        ],
        "Hexadecimal": "#87A96B"
    },
    {
        "Color": [
            "Asparagus 2"
        ],
        "Hexadecimal": "#7BA05B"
    },
    {
        "Color": [
            "Asphalt"
        ],
        "Hexadecimal": "#130A06"
    },
    {
        "Color": [
            "Astra"
        ],
        "Hexadecimal": "#FAEAB9"
    },
    {
        "Color": [
            "Astral"
        ],
        "Hexadecimal": "#327DA0"
    },
    {
        "Color": [
            "Astronaut"
        ],
        "Hexadecimal": "#283A77"
    },
    {
        "Color": [
            "Astronaut Blue"
        ],
        "Hexadecimal": "#013E62"
    },
    {
        "Color": [
            "Athens Gray"
        ],
        "Hexadecimal": "#EEF0F3"
    },
    {
        "Color": [
            "Aths Special"
        ],
        "Hexadecimal": "#ECEBCE"
    },
    {
        "Color": [
            "Atlantis"
        ],
        "Hexadecimal": "#97CD2D"
    },
    {
        "Color": [
            "Atoll"
        ],
        "Hexadecimal": "#0A6F75"
    },
    {
        "Color": [
            "Atomic Tangerine"
        ],
        "Hexadecimal": "#FF9966"
    },
    {
        "Color": [
            "Au Chico"
        ],
        "Hexadecimal": "#97605D"
    },
    {
        "Color": [
            "Aubergine"
        ],
        "Hexadecimal": "#3B0910"
    },
    {
        "Color": [
            "Auburn"
        ],
        "Hexadecimal": "#A52A2A"
    },
    {
        "Color": [
            "Aureolin"
        ],
        "Hexadecimal": "#FDEE00"
    },
    {
        "Color": [
            "Australian Mint"
        ],
        "Hexadecimal": "#F5FFBE"
    },
    {
        "Color": [
            "Avocado"
        ],
        "Hexadecimal": "#568203"
    },
    {
        "Color": [
            "Avocado 2"
        ],
        "Hexadecimal": "#888D65"
    },
    {
        "Color": [
            "Axolotl"
        ],
        "Hexadecimal": "#4E6649"
    },
    {
        "Color": [
            "Azalea"
        ],
        "Hexadecimal": "#F7C8DA"
    },
    {
        "Color": [
            "Aztec"
        ],
        "Hexadecimal": "#0D1C19"
    },
    {
        "Color": [
            "Azure"
        ],
        "Hexadecimal": "#315BA1"
    },
    {
        "Color": [
            "Azure (X11/Web Color)"
        ],
        "Hexadecimal": "#F0FFFF"
    },
    {
        "Color": [
            "Azure Radiance"
        ],
        "Hexadecimal": "#007FFF"
    },
    {
        "Color": [
            "B'dazzled Blue"
        ],
        "Hexadecimal": "#2E5894"
    },
    {
        "Color": [
            "Baby Blue"
        ],
        "Hexadecimal": "#89CFF0"
    },
    {
        "Color": [
            "Baby Blue Eyes"
        ],
        "Hexadecimal": "#A1CAF1"
    },
    {
        "Color": [
            "Baby Pink",
            "Tea Rose"
        ],
        "Hexadecimal": "#F4C2C2"
    },
    {
        "Color": [
            "Baby Powder"
        ],
        "Hexadecimal": "#FEFEFA"
    },
    {
        "Color": [
            "Bahama Blue"
        ],
        "Hexadecimal": "#026395"
    },
    {
        "Color": [
            "Bahia"
        ],
        "Hexadecimal": "#A5CB0C"
    },
    {
        "Color": [
            "Baja White"
        ],
        "Hexadecimal": "#FFF8D1"
    },
    {
        "Color": [
            "Baker-Miller Pink",
            "Schauss Pink"
        ],
        "Hexadecimal": "#FF91AF"
    },
    {
        "Color": [
            "Bali Hai"
        ],
        "Hexadecimal": "#859FAF"
    },
    {
        "Color": [
            "Baltic Sea"
        ],
        "Hexadecimal": "#2A2630"
    },
    {
        "Color": [
            "Bamboo"
        ],
        "Hexadecimal": "#DA6304"
    },
    {
        "Color": [
            "Banana Mania"
        ],
        "Hexadecimal": "#FAE7B5"
    },
    {
        "Color": [
            "Banana Mania 2"
        ],
        "Hexadecimal": "#FBE7B2"
    },
    {
        "Color": [
            "Bandicoot"
        ],
        "Hexadecimal": "#858470"
    },
    {
        "Color": [
            "Barberry"
        ],
        "Hexadecimal": "#DED717"
    },
    {
        "Color": [
            "Barbie Pink"
        ],
        "Hexadecimal": "#DA1884"
    },
    {
        "Color": [
            "Barley Corn"
        ],
        "Hexadecimal": "#A68B5B"
    },
    {
        "Color": [
            "Barley White"
        ],
        "Hexadecimal": "#FFF4CE"
    },
    {
        "Color": [
            "Barn Red"
        ],
        "Hexadecimal": "#7C0A02"
    },
    {
        "Color": [
            "Barossa"
        ],
        "Hexadecimal": "#44012D"
    },
    {
        "Color": [
            "Bastille"
        ],
        "Hexadecimal": "#292130"
    },
    {
        "Color": [
            "Battleship Gray"
        ],
        "Hexadecimal": "#828F72"
    },
    {
        "Color": [
            "Battleship Grey",
            "Old Silver"
        ],
        "Hexadecimal": "#848482"
    },
    {
        "Color": [
            "Bay Leaf"
        ],
        "Hexadecimal": "#7DA98D"
    },
    {
        "Color": [
            "Bay Of Many"
        ],
        "Hexadecimal": "#273A81"
    },
    {
        "Color": [
            "Bazaar"
        ],
        "Hexadecimal": "#98777B"
    },
    {
        "Color": [
            "Bean"
        ],
        "Hexadecimal": "#3D0C02"
    },
    {
        "Color": [
            "Beau Blue",
            "Pale Aqua"
        ],
        "Hexadecimal": "#BCD4E6"
    },
    {
        "Color": [
            "Beauty Bush"
        ],
        "Hexadecimal": "#EEC1BE"
    },
    {
        "Color": [
            "Beaver"
        ],
        "Hexadecimal": "#9F8170"
    },
    {
        "Color": [
            "Beaver 2"
        ],
        "Hexadecimal": "#926F5B"
    },
    {
        "Color": [
            "Beeswax"
        ],
        "Hexadecimal": "#FEF2C7"
    },
    {
        "Color": [
            "Beige"
        ],
        "Hexadecimal": "#F5F5DC"
    },
    {
        "Color": [
            "Bermuda"
        ],
        "Hexadecimal": "#7DD8C6"
    },
    {
        "Color": [
            "Bermuda Gray"
        ],
        "Hexadecimal": "#6B8BA2"
    },
    {
        "Color": [
            "Beryl Green"
        ],
        "Hexadecimal": "#DEE5C0"
    },
    {
        "Color": [
            "Bianca"
        ],
        "Hexadecimal": "#FCFBF3"
    },
    {
        "Color": [
            "Big Dip O’Ruby"
        ],
        "Hexadecimal": "#9C2542"
    },
    {
        "Color": [
            "Big Stone"
        ],
        "Hexadecimal": "#162A40"
    },
    {
        "Color": [
            "Bilbao"
        ],
        "Hexadecimal": "#327C14"
    },
    {
        "Color": [
            "Biloba Flower"
        ],
        "Hexadecimal": "#B2A1EA"
    },
    {
        "Color": [
            "Birch"
        ],
        "Hexadecimal": "#373021"
    },
    {
        "Color": [
            "Bird Flower"
        ],
        "Hexadecimal": "#D4CD16"
    },
    {
        "Color": [
            "Biscay"
        ],
        "Hexadecimal": "#1B3162"
    },
    {
        "Color": [
            "Bismark"
        ],
        "Hexadecimal": "#497183"
    },
    {
        "Color": [
            "Bison Hide"
        ],
        "Hexadecimal": "#C1B7A4"
    },
    {
        "Color": [
            "Bisque"
        ],
        "Hexadecimal": "#FFE4C4"
    },
    {
        "Color": [
            "Bistre"
        ],
        "Hexadecimal": "#3D2B1F"
    },
    {
        "Color": [
            "Bistre Brown",
            "Drab",
            "Mode Beige"
        ],
        "Hexadecimal": "#967117"
    },
    {
        "Color": [
            "Bitter"
        ],
        "Hexadecimal": "#868974"
    },
    {
        "Color": [
            "Bitter Lemon"
        ],
        "Hexadecimal": "#CAE00D"
    },
    {
        "Color": [
            "Bitter Lime",
            "Lime (Color Wheel)",
            "Lime"
        ],
        "Hexadecimal": "#BFFF00"
    },
    {
        "Color": [
            "Bittersweet"
        ],
        "Hexadecimal": "#FE6F5E"
    },
    {
        "Color": [
            "Bittersweet Shimmer"
        ],
        "Hexadecimal": "#BF4F51"
    },
    {
        "Color": [
            "Bizarre"
        ],
        "Hexadecimal": "#EEDEDA"
    },
    {
        "Color": [
            "Black"
        ],
        "Hexadecimal": "#000000"
    },
    {
        "Color": [
            "Black Bean"
        ],
        "Hexadecimal": "#081910"
    },
    {
        "Color": [
            "Black Chocolate"
        ],
        "Hexadecimal": "#1B1811"
    },
    {
        "Color": [
            "Black Coffee"
        ],
        "Hexadecimal": "#3B2F2F"
    },
    {
        "Color": [
            "Black Coral"
        ],
        "Hexadecimal": "#54626F"
    },
    {
        "Color": [
            "Black Forest"
        ],
        "Hexadecimal": "#0B1304"
    },
    {
        "Color": [
            "Black Haze"
        ],
        "Hexadecimal": "#F6F7F7"
    },
    {
        "Color": [
            "Black Marlin"
        ],
        "Hexadecimal": "#3E2C1C"
    },
    {
        "Color": [
            "Black Olive"
        ],
        "Hexadecimal": "#242E16"
    },
    {
        "Color": [
            "Black Olive 2"
        ],
        "Hexadecimal": "#3B3C36"
    },
    {
        "Color": [
            "Black Pearl"
        ],
        "Hexadecimal": "#041322"
    },
    {
        "Color": [
            "Black Rock"
        ],
        "Hexadecimal": "#0D0332"
    },
    {
        "Color": [
            "Black Rose"
        ],
        "Hexadecimal": "#67032D"
    },
    {
        "Color": [
            "Black Russian"
        ],
        "Hexadecimal": "#0A001C"
    },
    {
        "Color": [
            "Black Shadows"
        ],
        "Hexadecimal": "#BFAFB2"
    },
    {
        "Color": [
            "Black Squeeze"
        ],
        "Hexadecimal": "#F2FAFA"
    },
    {
        "Color": [
            "Black White"
        ],
        "Hexadecimal": "#FFFEF6"
    },
    {
        "Color": [
            "Blackberry"
        ],
        "Hexadecimal": "#4D0135"
    },
    {
        "Color": [
            "Blackcurrant"
        ],
        "Hexadecimal": "#32293A"
    },
    {
        "Color": [
            "Blanched Almond"
        ],
        "Hexadecimal": "#FFEBCD"
    },
    {
        "Color": [
            "Blast-Off Bronze"
        ],
        "Hexadecimal": "#A57164"
    },
    {
        "Color": [
            "Blaze Orange"
        ],
        "Hexadecimal": "#FF6600"
    },
    {
        "Color": [
            "Bleach White"
        ],
        "Hexadecimal": "#FEF3D8"
    },
    {
        "Color": [
            "Bleached Cedar"
        ],
        "Hexadecimal": "#2C2133"
    },
    {
        "Color": [
            "Bleu De France"
        ],
        "Hexadecimal": "#318CE7"
    },
    {
        "Color": [
            "Blizzard Blue"
        ],
        "Hexadecimal": "#A3E3ED"
    },
    {
        "Color": [
            "Blizzard Blue 2"
        ],
        "Hexadecimal": "#ACE5EE"
    },
    {
        "Color": [
            "Blond"
        ],
        "Hexadecimal": "#FAF0BE"
    },
    {
        "Color": [
            "Blood Red"
        ],
        "Hexadecimal": "#660000"
    },
    {
        "Color": [
            "Blossom"
        ],
        "Hexadecimal": "#DCB4BC"
    },
    {
        "Color": [
            "Blue"
        ],
        "Hexadecimal": "#0000FF"
    },
    {
        "Color": [
            "Blue (Crayola)"
        ],
        "Hexadecimal": "#1F75FE"
    },
    {
        "Color": [
            "Blue (MUNSELL)"
        ],
        "Hexadecimal": "#0093AF"
    },
    {
        "Color": [
            "Blue (NCS)"
        ],
        "Hexadecimal": "#0087BD"
    },
    {
        "Color": [
            "Blue (PANTONE)"
        ],
        "Hexadecimal": "#0018A8"
    },
    {
        "Color": [
            "Blue (Pigment)"
        ],
        "Hexadecimal": "#333399"
    },
    {
        "Color": [
            "Blue (RYB)"
        ],
        "Hexadecimal": "#0247FE"
    },
    {
        "Color": [
            "Blue Bayoux"
        ],
        "Hexadecimal": "#496679"
    },
    {
        "Color": [
            "Blue Bell"
        ],
        "Hexadecimal": "#A2A2D0"
    },
    {
        "Color": [
            "Blue Bell 2"
        ],
        "Hexadecimal": "#9999CC"
    },
    {
        "Color": [
            "Blue Chalk"
        ],
        "Hexadecimal": "#F1E9FF"
    },
    {
        "Color": [
            "Blue Charcoal"
        ],
        "Hexadecimal": "#010D1A"
    },
    {
        "Color": [
            "Blue Chill"
        ],
        "Hexadecimal": "#0C8990"
    },
    {
        "Color": [
            "Blue Diamond"
        ],
        "Hexadecimal": "#380474"
    },
    {
        "Color": [
            "Blue Dianne"
        ],
        "Hexadecimal": "#204852"
    },
    {
        "Color": [
            "Blue Gem"
        ],
        "Hexadecimal": "#2C0E8C"
    },
    {
        "Color": [
            "Blue Haze"
        ],
        "Hexadecimal": "#BFBED8"
    },
    {
        "Color": [
            "Blue Jeans"
        ],
        "Hexadecimal": "#5DADEC"
    },
    {
        "Color": [
            "Blue Lagoon"
        ],
        "Hexadecimal": "#017987"
    },
    {
        "Color": [
            "Blue Marguerite"
        ],
        "Hexadecimal": "#7666C6"
    },
    {
        "Color": [
            "Blue Ribbon"
        ],
        "Hexadecimal": "#0066FF"
    },
    {
        "Color": [
            "Blue Romance"
        ],
        "Hexadecimal": "#D2F6DE"
    },
    {
        "Color": [
            "Blue Sapphire"
        ],
        "Hexadecimal": "#126180"
    },
    {
        "Color": [
            "Blue Smoke"
        ],
        "Hexadecimal": "#748881"
    },
    {
        "Color": [
            "Blue Stone"
        ],
        "Hexadecimal": "#016162"
    },
    {
        "Color": [
            "Blue Violet"
        ],
        "Hexadecimal": "#8A2BE2"
    },
    {
        "Color": [
            "Blue Violet 2"
        ],
        "Hexadecimal": "#6456B7"
    },
    {
        "Color": [
            "Blue Whale"
        ],
        "Hexadecimal": "#042E4C"
    },
    {
        "Color": [
            "Blue Yonder"
        ],
        "Hexadecimal": "#5072A7"
    },
    {
        "Color": [
            "Blue Zodiac"
        ],
        "Hexadecimal": "#13264D"
    },
    {
        "Color": [
            "Blue-Gray",
            "Livid"
        ],
        "Hexadecimal": "#6699CC"
    },
    {
        "Color": [
            "Blue-Green"
        ],
        "Hexadecimal": "#0D98BA"
    },
    {
        "Color": [
            "Blue-Green (Color Wheel)"
        ],
        "Hexadecimal": "#064E40"
    },
    {
        "Color": [
            "Blue-Violet (Color Wheel)"
        ],
        "Hexadecimal": "#4D1A7F"
    },
    {
        "Color": [
            "Blue-Violet (Crayola)"
        ],
        "Hexadecimal": "#7366BD"
    },
    {
        "Color": [
            "Bluetiful"
        ],
        "Hexadecimal": "#3C69E7"
    },
    {
        "Color": [
            "Blumine"
        ],
        "Hexadecimal": "#18587A"
    },
    {
        "Color": [
            "Blush"
        ],
        "Hexadecimal": "#DE5D83"
    },
    {
        "Color": [
            "Blush 2"
        ],
        "Hexadecimal": "#B44668"
    },
    {
        "Color": [
            "Bole"
        ],
        "Hexadecimal": "#79443B"
    },
    {
        "Color": [
            "Bombay"
        ],
        "Hexadecimal": "#AFB1B8"
    },
    {
        "Color": [
            "Bon Jour"
        ],
        "Hexadecimal": "#E5E0E1"
    },
    {
        "Color": [
            "Bondi Blue"
        ],
        "Hexadecimal": "#0095B6"
    },
    {
        "Color": [
            "Bone"
        ],
        "Hexadecimal": "#E3DAC9"
    },
    {
        "Color": [
            "Bone 2"
        ],
        "Hexadecimal": "#E4D1C0"
    },
    {
        "Color": [
            "Bordeaux"
        ],
        "Hexadecimal": "#5C0120"
    },
    {
        "Color": [
            "Bossanova"
        ],
        "Hexadecimal": "#4E2A5A"
    },
    {
        "Color": [
            "Boston Blue"
        ],
        "Hexadecimal": "#3B91B4"
    },
    {
        "Color": [
            "Botticelli"
        ],
        "Hexadecimal": "#C7DDE5"
    },
    {
        "Color": [
            "Bottle Green"
        ],
        "Hexadecimal": "#006A4E"
    },
    {
        "Color": [
            "Bottle Green 2"
        ],
        "Hexadecimal": "#093624"
    },
    {
        "Color": [
            "Boulder"
        ],
        "Hexadecimal": "#7A7A7A"
    },
    {
        "Color": [
            "Bouquet"
        ],
        "Hexadecimal": "#AE809E"
    },
    {
        "Color": [
            "Bourbon"
        ],
        "Hexadecimal": "#BA6F1E"
    },
    {
        "Color": [
            "Bracken"
        ],
        "Hexadecimal": "#4A2A04"
    },
    {
        "Color": [
            "Brandy"
        ],
        "Hexadecimal": "#DEC196"
    },
    {
        "Color": [
            "Brandy 2"
        ],
        "Hexadecimal": "#87413F"
    },
    {
        "Color": [
            "Brandy Punch"
        ],
        "Hexadecimal": "#CD8429"
    },
    {
        "Color": [
            "Brandy Rose"
        ],
        "Hexadecimal": "#BB8983"
    },
    {
        "Color": [
            "Breaker Bay"
        ],
        "Hexadecimal": "#5DA19F"
    },
    {
        "Color": [
            "Brick Red"
        ],
        "Hexadecimal": "#C62D42"
    },
    {
        "Color": [
            "Brick Red 2"
        ],
        "Hexadecimal": "#CB4154"
    },
    {
        "Color": [
            "Bridal Heath"
        ],
        "Hexadecimal": "#FFFAF4"
    },
    {
        "Color": [
            "Bridesmaid"
        ],
        "Hexadecimal": "#FEF0EC"
    },
    {
        "Color": [
            "Bright Gray"
        ],
        "Hexadecimal": "#3C4151"
    },
    {
        "Color": [
            "Bright Green"
        ],
        "Hexadecimal": "#66FF00"
    },
    {
        "Color": [
            "Bright Lilac"
        ],
        "Hexadecimal": "#D891EF"
    },
    {
        "Color": [
            "Bright Maroon",
            "Maroon (Crayola)",
            "Maroon Flush"
        ],
        "Hexadecimal": "#C32148"
    },
    {
        "Color": [
            "Bright Navy Blue",
            "Navy Blue (Crayola)"
        ],
        "Hexadecimal": "#1974D2"
    },
    {
        "Color": [
            "Bright Red"
        ],
        "Hexadecimal": "#B10000"
    },
    {
        "Color": [
            "Bright Sun"
        ],
        "Hexadecimal": "#FED33C"
    },
    {
        "Color": [
            "Bright Turquoise"
        ],
        "Hexadecimal": "#08E8DE"
    },
    {
        "Color": [
            "Bright Yellow (Crayola)"
        ],
        "Hexadecimal": "#FFAA1D"
    },
    {
        "Color": [
            "Brilliant Rose"
        ],
        "Hexadecimal": "#FF55A3"
    },
    {
        "Color": [
            "Brink Pink"
        ],
        "Hexadecimal": "#FB607F"
    },
    {
        "Color": [
            "British Racing Green"
        ],
        "Hexadecimal": "#004225"
    },
    {
        "Color": [
            "Bronco"
        ],
        "Hexadecimal": "#ABA196"
    },
    {
        "Color": [
            "Bronze"
        ],
        "Hexadecimal": "#CD7F32"
    },
    {
        "Color": [
            "Bronze 2"
        ],
        "Hexadecimal": "#3F2109"
    },
    {
        "Color": [
            "Bronze Olive"
        ],
        "Hexadecimal": "#4E420C"
    },
    {
        "Color": [
            "Bronzetone"
        ],
        "Hexadecimal": "#4D400F"
    },
    {
        "Color": [
            "Broom"
        ],
        "Hexadecimal": "#FFEC13"
    },
    {
        "Color": [
            "Brown"
        ],
        "Hexadecimal": "#964B00"
    },
    {
        "Color": [
            "Brown 2"
        ],
        "Hexadecimal": "#88540B"
    },
    {
        "Color": [
            "Brown Bramble"
        ],
        "Hexadecimal": "#592804"
    },
    {
        "Color": [
            "Brown Derby"
        ],
        "Hexadecimal": "#492615"
    },
    {
        "Color": [
            "Brown Pod"
        ],
        "Hexadecimal": "#401801"
    },
    {
        "Color": [
            "Brown Rust"
        ],
        "Hexadecimal": "#AF593E"
    },
    {
        "Color": [
            "Brown Sugar"
        ],
        "Hexadecimal": "#AF6E4D"
    },
    {
        "Color": [
            "Brown Tumbleweed"
        ],
        "Hexadecimal": "#37290E"
    },
    {
        "Color": [
            "Brunswick Green",
            "English Green"
        ],
        "Hexadecimal": "#1B4D3E"
    },
    {
        "Color": [
            "Bubbles"
        ],
        "Hexadecimal": "#E7FEFF"
    },
    {
        "Color": [
            "Buccaneer"
        ],
        "Hexadecimal": "#622F30"
    },
    {
        "Color": [
            "Bud"
        ],
        "Hexadecimal": "#A8AE9C"
    },
    {
        "Color": [
            "Bud Green"
        ],
        "Hexadecimal": "#7BB661"
    },
    {
        "Color": [
            "Buddha Gold"
        ],
        "Hexadecimal": "#C1A004"
    },
    {
        "Color": [
            "Buff"
        ],
        "Hexadecimal": "#FFC680"
    },
    {
        "Color": [
            "Buff 2"
        ],
        "Hexadecimal": "#F0DC82"
    },
    {
        "Color": [
            "Bulgarian Rose"
        ],
        "Hexadecimal": "#480607"
    },
    {
        "Color": [
            "Bull Shot"
        ],
        "Hexadecimal": "#864D1E"
    },
    {
        "Color": [
            "Bunker"
        ],
        "Hexadecimal": "#0D1117"
    },
    {
        "Color": [
            "Bunting"
        ],
        "Hexadecimal": "#151F4C"
    },
    {
        "Color": [
            "Burgundy"
        ],
        "Hexadecimal": "#900020"
    },
    {
        "Color": [
            "Burgundy 2"
        ],
        "Hexadecimal": "#800020"
    },
    {
        "Color": [
            "Burlywood"
        ],
        "Hexadecimal": "#DEB887"
    },
    {
        "Color": [
            "Burnham"
        ],
        "Hexadecimal": "#002E20"
    },
    {
        "Color": [
            "Burning Orange"
        ],
        "Hexadecimal": "#FF7034"
    },
    {
        "Color": [
            "Burning Sand"
        ],
        "Hexadecimal": "#D99376"
    },
    {
        "Color": [
            "Burnished Brown"
        ],
        "Hexadecimal": "#A17A74"
    },
    {
        "Color": [
            "Burnt Maroon"
        ],
        "Hexadecimal": "#420303"
    },
    {
        "Color": [
            "Burnt Orange"
        ],
        "Hexadecimal": "#CC5500"
    },
    {
        "Color": [
            "Burnt Sienna"
        ],
        "Hexadecimal": "#E97451"
    },
    {
        "Color": [
            "Burnt Umber"
        ],
        "Hexadecimal": "#8A3324"
    },
    {
        "Color": [
            "Bush"
        ],
        "Hexadecimal": "#0D2E1C"
    },
    {
        "Color": [
            "Buttercup"
        ],
        "Hexadecimal": "#F3AD16"
    },
    {
        "Color": [
            "Buttered Rum"
        ],
        "Hexadecimal": "#A1750D"
    },
    {
        "Color": [
            "Butterfly Bush"
        ],
        "Hexadecimal": "#624E9A"
    },
    {
        "Color": [
            "Buttermilk"
        ],
        "Hexadecimal": "#FFF1B5"
    },
    {
        "Color": [
            "Buttery White"
        ],
        "Hexadecimal": "#FFFCEA"
    },
    {
        "Color": [
            "Byzantine"
        ],
        "Hexadecimal": "#BD33A4"
    },
    {
        "Color": [
            "Byzantium"
        ],
        "Hexadecimal": "#702963"
    },
    {
        "Color": [
            "Cab Sav"
        ],
        "Hexadecimal": "#4D0A18"
    },
    {
        "Color": [
            "Cabaret"
        ],
        "Hexadecimal": "#D94972"
    },
    {
        "Color": [
            "Cabbage Pont"
        ],
        "Hexadecimal": "#3F4C3A"
    },
    {
        "Color": [
            "Cactus"
        ],
        "Hexadecimal": "#587156"
    },
    {
        "Color": [
            "Cadet"
        ],
        "Hexadecimal": "#536872"
    },
    {
        "Color": [
            "Cadet Blue"
        ],
        "Hexadecimal": "#5F9EA0"
    },
    {
        "Color": [
            "Cadet Blue (Crayola)"
        ],
        "Hexadecimal": "#A9B2C3"
    },
    {
        "Color": [
            "Cadet Grey"
        ],
        "Hexadecimal": "#91A3B0"
    },
    {
        "Color": [
            "Cadillac"
        ],
        "Hexadecimal": "#B04C6A"
    },
    {
        "Color": [
            "Cadmium Green"
        ],
        "Hexadecimal": "#006B3C"
    },
    {
        "Color": [
            "Cadmium Orange"
        ],
        "Hexadecimal": "#ED872D"
    },
    {
        "Color": [
            "Cadmium Red"
        ],
        "Hexadecimal": "#E30022"
    },
    {
        "Color": [
            "Cadmium Yellow"
        ],
        "Hexadecimal": "#FFF600"
    },
    {
        "Color": [
            "Café Au Lait",
            "French Beige",
            "Tuscan Tan"
        ],
        "Hexadecimal": "#A67B5B"
    },
    {
        "Color": [
            "Café Noir"
        ],
        "Hexadecimal": "#4B3621"
    },
    {
        "Color": [
            "Cafe Royale"
        ],
        "Hexadecimal": "#6F440C"
    },
    {
        "Color": [
            "Calico"
        ],
        "Hexadecimal": "#E0C095"
    },
    {
        "Color": [
            "California"
        ],
        "Hexadecimal": "#FE9D04"
    },
    {
        "Color": [
            "Calypso"
        ],
        "Hexadecimal": "#31728D"
    },
    {
        "Color": [
            "Camarone"
        ],
        "Hexadecimal": "#00581A"
    },
    {
        "Color": [
            "Cambridge Blue"
        ],
        "Hexadecimal": "#A3C1AD"
    },
    {
        "Color": [
            "Camel",
            "Fallow",
            "Lion",
            "Wood Brown"
        ],
        "Hexadecimal": "#C19A6B"
    },
    {
        "Color": [
            "Camelot"
        ],
        "Hexadecimal": "#893456"
    },
    {
        "Color": [
            "Cameo"
        ],
        "Hexadecimal": "#D9B99B"
    },
    {
        "Color": [
            "Cameo Pink"
        ],
        "Hexadecimal": "#EFBBCC"
    },
    {
        "Color": [
            "Camouflage"
        ],
        "Hexadecimal": "#3C3910"
    },
    {
        "Color": [
            "Camouflage Green"
        ],
        "Hexadecimal": "#78866B"
    },
    {
        "Color": [
            "Can Can"
        ],
        "Hexadecimal": "#D591A4"
    },
    {
        "Color": [
            "Canary"
        ],
        "Hexadecimal": "#F3FB62"
    },
    {
        "Color": [
            "Canary Yellow",
            "Process Yellow",
            "Yellow (Process)"
        ],
        "Hexadecimal": "#FFEF00"
    },
    {
        "Color": [
            "Candlelight"
        ],
        "Hexadecimal": "#FCD917"
    },
    {
        "Color": [
            "Candy Apple Red"
        ],
        "Hexadecimal": "#FF0800"
    },
    {
        "Color": [
            "Candy Corn"
        ],
        "Hexadecimal": "#FBEC5D"
    },
    {
        "Color": [
            "Candy Pink",
            "Tango Pink"
        ],
        "Hexadecimal": "#E4717A"
    },
    {
        "Color": [
            "Cannon Black"
        ],
        "Hexadecimal": "#251706"
    },
    {
        "Color": [
            "Cannon Pink"
        ],
        "Hexadecimal": "#894367"
    },
    {
        "Color": [
            "Cape Cod"
        ],
        "Hexadecimal": "#3C4443"
    },
    {
        "Color": [
            "Cape Honey"
        ],
        "Hexadecimal": "#FEE5AC"
    },
    {
        "Color": [
            "Cape Palliser"
        ],
        "Hexadecimal": "#A26645"
    },
    {
        "Color": [
            "Caper"
        ],
        "Hexadecimal": "#DCEDB4"
    },
    {
        "Color": [
            "Capri",
            "Deep Sky Blue"
        ],
        "Hexadecimal": "#00BFFF"
    },
    {
        "Color": [
            "Caput Mortuum"
        ],
        "Hexadecimal": "#592720"
    },
    {
        "Color": [
            "Caramel"
        ],
        "Hexadecimal": "#FFDDAF"
    },
    {
        "Color": [
            "Cararra"
        ],
        "Hexadecimal": "#EEEEE8"
    },
    {
        "Color": [
            "Cardin Green"
        ],
        "Hexadecimal": "#01361C"
    },
    {
        "Color": [
            "Cardinal"
        ],
        "Hexadecimal": "#C41E3A"
    },
    {
        "Color": [
            "Cardinal Pink"
        ],
        "Hexadecimal": "#8C055E"
    },
    {
        "Color": [
            "Careys Pink"
        ],
        "Hexadecimal": "#D29EAA"
    },
    {
        "Color": [
            "Caribbean Green"
        ],
        "Hexadecimal": "#00CC99"
    },
    {
        "Color": [
            "Carissma"
        ],
        "Hexadecimal": "#EA88A8"
    },
    {
        "Color": [
            "Carla"
        ],
        "Hexadecimal": "#F3FFD8"
    },
    {
        "Color": [
            "Carmine"
        ],
        "Hexadecimal": "#960018"
    },
    {
        "Color": [
            "Carmine (M&P)"
        ],
        "Hexadecimal": "#D70040"
    },
    {
        "Color": [
            "Carnaby Tan"
        ],
        "Hexadecimal": "#5C2E01"
    },
    {
        "Color": [
            "Carnation"
        ],
        "Hexadecimal": "#F95A61"
    },
    {
        "Color": [
            "Carnation Pink"
        ],
        "Hexadecimal": "#FFA6C9"
    },
    {
        "Color": [
            "Carnelian",
            "Cornell Red"
        ],
        "Hexadecimal": "#B31B1B"
    },
    {
        "Color": [
            "Carolina Blue"
        ],
        "Hexadecimal": "#56A0D3"
    },
    {
        "Color": [
            "Carousel Pink"
        ],
        "Hexadecimal": "#F9E0ED"
    },
    {
        "Color": [
            "Carrot Orange"
        ],
        "Hexadecimal": "#ED9121"
    },
    {
        "Color": [
            "Casablanca"
        ],
        "Hexadecimal": "#F8B853"
    },
    {
        "Color": [
            "Casal"
        ],
        "Hexadecimal": "#2F6168"
    },
    {
        "Color": [
            "Cascade"
        ],
        "Hexadecimal": "#8BA9A5"
    },
    {
        "Color": [
            "Cashmere"
        ],
        "Hexadecimal": "#E6BEA5"
    },
    {
        "Color": [
            "Casper"
        ],
        "Hexadecimal": "#ADBED1"
    },
    {
        "Color": [
            "Castleton Green"
        ],
        "Hexadecimal": "#00563F"
    },
    {
        "Color": [
            "Castro"
        ],
        "Hexadecimal": "#52001F"
    },
    {
        "Color": [
            "Catalina Blue"
        ],
        "Hexadecimal": "#062A78"
    },
    {
        "Color": [
            "Catawba"
        ],
        "Hexadecimal": "#703642"
    },
    {
        "Color": [
            "Catskill White"
        ],
        "Hexadecimal": "#EEF6F7"
    },
    {
        "Color": [
            "Cavern Pink"
        ],
        "Hexadecimal": "#E3BEBE"
    },
    {
        "Color": [
            "Cedar"
        ],
        "Hexadecimal": "#3E1C14"
    },
    {
        "Color": [
            "Cedar Chest"
        ],
        "Hexadecimal": "#C95A49"
    },
    {
        "Color": [
            "Cedar Wood Finish"
        ],
        "Hexadecimal": "#711A00"
    },
    {
        "Color": [
            "Celadon"
        ],
        "Hexadecimal": "#ACE1AF"
    },
    {
        "Color": [
            "Celadon Blue",
            "Deep Cerulean"
        ],
        "Hexadecimal": "#007BA7"
    },
    {
        "Color": [
            "Celadon Green"
        ],
        "Hexadecimal": "#2F847C"
    },
    {
        "Color": [
            "Celery"
        ],
        "Hexadecimal": "#B8C25D"
    },
    {
        "Color": [
            "Celeste"
        ],
        "Hexadecimal": "#D1D2CA"
    },
    {
        "Color": [
            "Cello"
        ],
        "Hexadecimal": "#1E385B"
    },
    {
        "Color": [
            "Celtic"
        ],
        "Hexadecimal": "#163222"
    },
    {
        "Color": [
            "Celtic Blue"
        ],
        "Hexadecimal": "#246BCE"
    },
    {
        "Color": [
            "Cement"
        ],
        "Hexadecimal": "#8D7662"
    },
    {
        "Color": [
            "Ceramic"
        ],
        "Hexadecimal": "#FCFFF9"
    },
    {
        "Color": [
            "Cerise",
            "Cerise Red"
        ],
        "Hexadecimal": "#DE3163"
    },
    {
        "Color": [
            "Cerulean"
        ],
        "Hexadecimal": "#02A4D3"
    },
    {
        "Color": [
            "Cerulean (Crayola)"
        ],
        "Hexadecimal": "#1DACD6"
    },
    {
        "Color": [
            "Cerulean Blue"
        ],
        "Hexadecimal": "#2A52BE"
    },
    {
        "Color": [
            "Cerulean Frost"
        ],
        "Hexadecimal": "#6D9BC3"
    },
    {
        "Color": [
            "Cg Blue"
        ],
        "Hexadecimal": "#007AA5"
    },
    {
        "Color": [
            "Cg Red"
        ],
        "Hexadecimal": "#E03C31"
    },
    {
        "Color": [
            "Chablis"
        ],
        "Hexadecimal": "#FFF4F3"
    },
    {
        "Color": [
            "Chalet Green"
        ],
        "Hexadecimal": "#516E3D"
    },
    {
        "Color": [
            "Chalky"
        ],
        "Hexadecimal": "#EED794"
    },
    {
        "Color": [
            "Chambray"
        ],
        "Hexadecimal": "#354E8C"
    },
    {
        "Color": [
            "Chamois"
        ],
        "Hexadecimal": "#EDDCB1"
    },
    {
        "Color": [
            "Champagne"
        ],
        "Hexadecimal": "#F7E7CE"
    },
    {
        "Color": [
            "Champagne 2"
        ],
        "Hexadecimal": "#FAECCC"
    },
    {
        "Color": [
            "Champagne Pink"
        ],
        "Hexadecimal": "#F1DDCF"
    },
    {
        "Color": [
            "Chantilly"
        ],
        "Hexadecimal": "#F8C3DF"
    },
    {
        "Color": [
            "Charade"
        ],
        "Hexadecimal": "#292937"
    },
    {
        "Color": [
            "Charcoal"
        ],
        "Hexadecimal": "#36454F"
    },
    {
        "Color": [
            "Chardon"
        ],
        "Hexadecimal": "#FFF3F1"
    },
    {
        "Color": [
            "Chardonnay"
        ],
        "Hexadecimal": "#FFCD8C"
    },
    {
        "Color": [
            "Charleston Green"
        ],
        "Hexadecimal": "#232B2B"
    },
    {
        "Color": [
            "Charlotte"
        ],
        "Hexadecimal": "#BAEEF9"
    },
    {
        "Color": [
            "Charm"
        ],
        "Hexadecimal": "#D47494"
    },
    {
        "Color": [
            "Charm Pink"
        ],
        "Hexadecimal": "#E68FAC"
    },
    {
        "Color": [
            "Chartreuse (Traditional)",
            "Chartreuse Yellow"
        ],
        "Hexadecimal": "#DFFF00"
    },
    {
        "Color": [
            "Chartreuse (Web)",
            "Chartreuse"
        ],
        "Hexadecimal": "#7FFF00"
    },
    {
        "Color": [
            "Chateau Green"
        ],
        "Hexadecimal": "#40A860"
    },
    {
        "Color": [
            "Chatelle"
        ],
        "Hexadecimal": "#BDB3C7"
    },
    {
        "Color": [
            "Chathams Blue"
        ],
        "Hexadecimal": "#175579"
    },
    {
        "Color": [
            "Chelsea Cucumber"
        ],
        "Hexadecimal": "#83AA5D"
    },
    {
        "Color": [
            "Chelsea Gem"
        ],
        "Hexadecimal": "#9E5302"
    },
    {
        "Color": [
            "Chenin"
        ],
        "Hexadecimal": "#DFCD6F"
    },
    {
        "Color": [
            "Cherokee"
        ],
        "Hexadecimal": "#FCDA98"
    },
    {
        "Color": [
            "Cherry Blossom Pink"
        ],
        "Hexadecimal": "#FFB7C5"
    },
    {
        "Color": [
            "Cherry Pie"
        ],
        "Hexadecimal": "#2A0359"
    },
    {
        "Color": [
            "Cherrywood"
        ],
        "Hexadecimal": "#651A14"
    },
    {
        "Color": [
            "Cherub"
        ],
        "Hexadecimal": "#F8D9E9"
    },
    {
        "Color": [
            "Chestnut"
        ],
        "Hexadecimal": "#954535"
    },
    {
        "Color": [
            "Chetwode Blue"
        ],
        "Hexadecimal": "#8581D9"
    },
    {
        "Color": [
            "Chicago"
        ],
        "Hexadecimal": "#5D5C58"
    },
    {
        "Color": [
            "Chiffon"
        ],
        "Hexadecimal": "#F1FFC8"
    },
    {
        "Color": [
            "Chilean Fire"
        ],
        "Hexadecimal": "#F77703"
    },
    {
        "Color": [
            "Chilean Heath"
        ],
        "Hexadecimal": "#FFFDE6"
    },
    {
        "Color": [
            "Chili Red"
        ],
        "Hexadecimal": "#E23D28"
    },
    {
        "Color": [
            "China Ivory"
        ],
        "Hexadecimal": "#FCFFE7"
    },
    {
        "Color": [
            "China Pink",
            "Liseran Purple",
            "Thulian Pink"
        ],
        "Hexadecimal": "#DE6FA1"
    },
    {
        "Color": [
            "China Rose"
        ],
        "Hexadecimal": "#A8516E"
    },
    {
        "Color": [
            "Chinese Red"
        ],
        "Hexadecimal": "#AA381E"
    },
    {
        "Color": [
            "Chinese Violet"
        ],
        "Hexadecimal": "#856088"
    },
    {
        "Color": [
            "Chinese Yellow"
        ],
        "Hexadecimal": "#FFB200"
    },
    {
        "Color": [
            "Chino"
        ],
        "Hexadecimal": "#CEC7A7"
    },
    {
        "Color": [
            "Chinook"
        ],
        "Hexadecimal": "#A8E3BD"
    },
    {
        "Color": [
            "Chocolate"
        ],
        "Hexadecimal": "#370202"
    },
    {
        "Color": [
            "Chocolate (Traditional)",
            "Cinnamon"
        ],
        "Hexadecimal": "#7B3F00"
    },
    {
        "Color": [
            "Chocolate (Web)",
            "Hot Cinnamon"
        ],
        "Hexadecimal": "#D2691E"
    },
    {
        "Color": [
            "Chocolate Cosmos"
        ],
        "Hexadecimal": "#58111A"
    },
    {
        "Color": [
            "Christalle"
        ],
        "Hexadecimal": "#33036B"
    },
    {
        "Color": [
            "Christi"
        ],
        "Hexadecimal": "#67A712"
    },
    {
        "Color": [
            "Christine"
        ],
        "Hexadecimal": "#E7730A"
    },
    {
        "Color": [
            "Chrome White"
        ],
        "Hexadecimal": "#E8F1D4"
    },
    {
        "Color": [
            "Chrome Yellow"
        ],
        "Hexadecimal": "#FFA700"
    },
    {
        "Color": [
            "Cinder"
        ],
        "Hexadecimal": "#0E0E18"
    },
    {
        "Color": [
            "Cinderella"
        ],
        "Hexadecimal": "#FDE1DC"
    },
    {
        "Color": [
            "Cinereous"
        ],
        "Hexadecimal": "#98817B"
    },
    {
        "Color": [
            "Cinnabar"
        ],
        "Hexadecimal": "#E34234"
    },
    {
        "Color": [
            "Cinnamon Satin"
        ],
        "Hexadecimal": "#CD607E"
    },
    {
        "Color": [
            "Cioccolato"
        ],
        "Hexadecimal": "#55280C"
    },
    {
        "Color": [
            "Citrine"
        ],
        "Hexadecimal": "#E4D00A"
    },
    {
        "Color": [
            "Citrine White"
        ],
        "Hexadecimal": "#FAF7D6"
    },
    {
        "Color": [
            "Citron"
        ],
        "Hexadecimal": "#9FA91F"
    },
    {
        "Color": [
            "Citron 2"
        ],
        "Hexadecimal": "#9EA91F"
    },
    {
        "Color": [
            "Citrus"
        ],
        "Hexadecimal": "#A1C50A"
    },
    {
        "Color": [
            "Clairvoyant"
        ],
        "Hexadecimal": "#480656"
    },
    {
        "Color": [
            "Clam Shell"
        ],
        "Hexadecimal": "#D4B6AF"
    },
    {
        "Color": [
            "Claret"
        ],
        "Hexadecimal": "#7F1734"
    },
    {
        "Color": [
            "Classic Rose"
        ],
        "Hexadecimal": "#FBCCE7"
    },
    {
        "Color": [
            "Clay Ash"
        ],
        "Hexadecimal": "#BDC8B3"
    },
    {
        "Color": [
            "Clay Creek"
        ],
        "Hexadecimal": "#8A8360"
    },
    {
        "Color": [
            "Clear Day"
        ],
        "Hexadecimal": "#E9FFFD"
    },
    {
        "Color": [
            "Clementine"
        ],
        "Hexadecimal": "#E96E00"
    },
    {
        "Color": [
            "Clinker"
        ],
        "Hexadecimal": "#371D09"
    },
    {
        "Color": [
            "Cloud"
        ],
        "Hexadecimal": "#C7C4BF"
    },
    {
        "Color": [
            "Cloud Burst"
        ],
        "Hexadecimal": "#202E54"
    },
    {
        "Color": [
            "Cloudy"
        ],
        "Hexadecimal": "#ACA59F"
    },
    {
        "Color": [
            "Clover"
        ],
        "Hexadecimal": "#384910"
    },
    {
        "Color": [
            "Cobalt Blue",
            "Cobalt"
        ],
        "Hexadecimal": "#0047AB"
    },
    {
        "Color": [
            "Cocoa Bean"
        ],
        "Hexadecimal": "#481C1C"
    },
    {
        "Color": [
            "Cocoa Brown"
        ],
        "Hexadecimal": "#301F1E"
    },
    {
        "Color": [
            "Coconut Cream"
        ],
        "Hexadecimal": "#F8F7DC"
    },
    {
        "Color": [
            "Cod Gray"
        ],
        "Hexadecimal": "#0B0B0B"
    },
    {
        "Color": [
            "Coffee"
        ],
        "Hexadecimal": "#706555"
    },
    {
        "Color": [
            "Coffee Bean"
        ],
        "Hexadecimal": "#2A140E"
    },
    {
        "Color": [
            "Cognac"
        ],
        "Hexadecimal": "#9F381D"
    },
    {
        "Color": [
            "Cola"
        ],
        "Hexadecimal": "#3F2500"
    },
    {
        "Color": [
            "Cold Purple"
        ],
        "Hexadecimal": "#ABA0D9"
    },
    {
        "Color": [
            "Cold Turkey"
        ],
        "Hexadecimal": "#CEBABA"
    },
    {
        "Color": [
            "Colonial White"
        ],
        "Hexadecimal": "#FFEDBC"
    },
    {
        "Color": [
            "Columbia Blue"
        ],
        "Hexadecimal": "#B9D9EB"
    },
    {
        "Color": [
            "Comet"
        ],
        "Hexadecimal": "#5C5D75"
    },
    {
        "Color": [
            "Como"
        ],
        "Hexadecimal": "#517C66"
    },
    {
        "Color": [
            "Conch"
        ],
        "Hexadecimal": "#C9D9D2"
    },
    {
        "Color": [
            "Concord"
        ],
        "Hexadecimal": "#7C7B7A"
    },
    {
        "Color": [
            "Concrete"
        ],
        "Hexadecimal": "#F2F2F2"
    },
    {
        "Color": [
            "Confetti"
        ],
        "Hexadecimal": "#E9D75A"
    },
    {
        "Color": [
            "Congo Brown"
        ],
        "Hexadecimal": "#593737"
    },
    {
        "Color": [
            "Congo Pink",
            "Coral Pink",
            "Tea Rose"
        ],
        "Hexadecimal": "#F88379"
    },
    {
        "Color": [
            "Congress Blue"
        ],
        "Hexadecimal": "#02478E"
    },
    {
        "Color": [
            "Conifer"
        ],
        "Hexadecimal": "#ACDD4D"
    },
    {
        "Color": [
            "Contessa"
        ],
        "Hexadecimal": "#C6726B"
    },
    {
        "Color": [
            "Cool Grey"
        ],
        "Hexadecimal": "#8C92AC"
    },
    {
        "Color": [
            "Copper"
        ],
        "Hexadecimal": "#B87333"
    },
    {
        "Color": [
            "Copper (Crayola)",
            "Copperfield"
        ],
        "Hexadecimal": "#DA8A67"
    },
    {
        "Color": [
            "Copper Canyon"
        ],
        "Hexadecimal": "#7E3A15"
    },
    {
        "Color": [
            "Copper Penny"
        ],
        "Hexadecimal": "#AD6F69"
    },
    {
        "Color": [
            "Copper Red"
        ],
        "Hexadecimal": "#CB6D51"
    },
    {
        "Color": [
            "Copper Rose"
        ],
        "Hexadecimal": "#996666"
    },
    {
        "Color": [
            "Copper Rust"
        ],
        "Hexadecimal": "#944747"
    },
    {
        "Color": [
            "Coquelicot"
        ],
        "Hexadecimal": "#FF3800"
    },
    {
        "Color": [
            "Coral"
        ],
        "Hexadecimal": "#FF7F50"
    },
    {
        "Color": [
            "Coral Red"
        ],
        "Hexadecimal": "#FF4040"
    },
    {
        "Color": [
            "Coral Reef"
        ],
        "Hexadecimal": "#C7BCA2"
    },
    {
        "Color": [
            "Coral Tree"
        ],
        "Hexadecimal": "#A86B6B"
    },
    {
        "Color": [
            "Cordovan"
        ],
        "Hexadecimal": "#893F45"
    },
    {
        "Color": [
            "Corduroy"
        ],
        "Hexadecimal": "#606E68"
    },
    {
        "Color": [
            "Coriander"
        ],
        "Hexadecimal": "#C4D0B0"
    },
    {
        "Color": [
            "Cork"
        ],
        "Hexadecimal": "#40291D"
    },
    {
        "Color": [
            "Corn"
        ],
        "Hexadecimal": "#E7BF05"
    },
    {
        "Color": [
            "Corn Field"
        ],
        "Hexadecimal": "#F8FACD"
    },
    {
        "Color": [
            "Corn Harvest"
        ],
        "Hexadecimal": "#8B6B0B"
    },
    {
        "Color": [
            "Cornflower Blue"
        ],
        "Hexadecimal": "#6495ED"
    },
    {
        "Color": [
            "Cornflower Lilac"
        ],
        "Hexadecimal": "#FFB0AC"
    },
    {
        "Color": [
            "Cornsilk"
        ],
        "Hexadecimal": "#FFF8DC"
    },
    {
        "Color": [
            "Corvette"
        ],
        "Hexadecimal": "#FAD3A2"
    },
    {
        "Color": [
            "Cosmic"
        ],
        "Hexadecimal": "#76395D"
    },
    {
        "Color": [
            "Cosmic Cobalt"
        ],
        "Hexadecimal": "#2E2D88"
    },
    {
        "Color": [
            "Cosmic Latte"
        ],
        "Hexadecimal": "#FFF8E7"
    },
    {
        "Color": [
            "Cosmos"
        ],
        "Hexadecimal": "#FFD8D9"
    },
    {
        "Color": [
            "Costa Del Sol"
        ],
        "Hexadecimal": "#615D30"
    },
    {
        "Color": [
            "Cotton Candy"
        ],
        "Hexadecimal": "#FFBCD9"
    },
    {
        "Color": [
            "Cotton Candy 2"
        ],
        "Hexadecimal": "#FFB7D5"
    },
    {
        "Color": [
            "Cotton Seed"
        ],
        "Hexadecimal": "#C2BDB6"
    },
    {
        "Color": [
            "County Green"
        ],
        "Hexadecimal": "#01371A"
    },
    {
        "Color": [
            "Cowboy"
        ],
        "Hexadecimal": "#4D282D"
    },
    {
        "Color": [
            "Coyote Brown"
        ],
        "Hexadecimal": "#81613C"
    },
    {
        "Color": [
            "Crail"
        ],
        "Hexadecimal": "#B95140"
    },
    {
        "Color": [
            "Cranberry"
        ],
        "Hexadecimal": "#DB5079"
    },
    {
        "Color": [
            "Crater Brown"
        ],
        "Hexadecimal": "#462425"
    },
    {
        "Color": [
            "Cream"
        ],
        "Hexadecimal": "#FFFDD0"
    },
    {
        "Color": [
            "Cream Brulee"
        ],
        "Hexadecimal": "#FFE5A0"
    },
    {
        "Color": [
            "Cream Can"
        ],
        "Hexadecimal": "#F5C85C"
    },
    {
        "Color": [
            "Creole"
        ],
        "Hexadecimal": "#1E0F04"
    },
    {
        "Color": [
            "Crete"
        ],
        "Hexadecimal": "#737829"
    },
    {
        "Color": [
            "Crimson"
        ],
        "Hexadecimal": "#DC143C"
    },
    {
        "Color": [
            "Crimson (UA)"
        ],
        "Hexadecimal": "#9E1B32"
    },
    {
        "Color": [
            "Crocodile"
        ],
        "Hexadecimal": "#736D58"
    },
    {
        "Color": [
            "Crown Of Thorns"
        ],
        "Hexadecimal": "#771F1F"
    },
    {
        "Color": [
            "Crowshead"
        ],
        "Hexadecimal": "#1C1208"
    },
    {
        "Color": [
            "Cruise"
        ],
        "Hexadecimal": "#B5ECDF"
    },
    {
        "Color": [
            "Crusoe"
        ],
        "Hexadecimal": "#004816"
    },
    {
        "Color": [
            "Crusta"
        ],
        "Hexadecimal": "#FD7B33"
    },
    {
        "Color": [
            "Crystal"
        ],
        "Hexadecimal": "#A7D8DE"
    },
    {
        "Color": [
            "Cultured"
        ],
        "Hexadecimal": "#F5F5F5"
    },
    {
        "Color": [
            "Cumin"
        ],
        "Hexadecimal": "#924321"
    },
    {
        "Color": [
            "Cumulus"
        ],
        "Hexadecimal": "#FDFFD5"
    },
    {
        "Color": [
            "Cupid"
        ],
        "Hexadecimal": "#FBBEDA"
    },
    {
        "Color": [
            "Curious Blue"
        ],
        "Hexadecimal": "#2596D1"
    },
    {
        "Color": [
            "Cutty Sark"
        ],
        "Hexadecimal": "#507672"
    },
    {
        "Color": [
            "Cyan (Process)"
        ],
        "Hexadecimal": "#00B7EB"
    },
    {
        "Color": [
            "Cyber Grape"
        ],
        "Hexadecimal": "#58427C"
    },
    {
        "Color": [
            "Cyber Yellow",
            "Yellow (NCS)"
        ],
        "Hexadecimal": "#FFD300"
    },
    {
        "Color": [
            "Cyclamen"
        ],
        "Hexadecimal": "#F56FA1"
    },
    {
        "Color": [
            "Cyprus"
        ],
        "Hexadecimal": "#003E40"
    },
    {
        "Color": [
            "Daintree"
        ],
        "Hexadecimal": "#012731"
    },
    {
        "Color": [
            "Dairy Cream"
        ],
        "Hexadecimal": "#F9E4BC"
    },
    {
        "Color": [
            "Daisy Bush"
        ],
        "Hexadecimal": "#4F2398"
    },
    {
        "Color": [
            "Dallas"
        ],
        "Hexadecimal": "#6E4B26"
    },
    {
        "Color": [
            "Dandelion"
        ],
        "Hexadecimal": "#FED85D"
    },
    {
        "Color": [
            "Danube"
        ],
        "Hexadecimal": "#6093D1"
    },
    {
        "Color": [
            "Dark Blue"
        ],
        "Hexadecimal": "#0000C8"
    },
    {
        "Color": [
            "Dark Blue-Gray"
        ],
        "Hexadecimal": "#666699"
    },
    {
        "Color": [
            "Dark Brown"
        ],
        "Hexadecimal": "#654321"
    },
    {
        "Color": [
            "Dark Burgundy"
        ],
        "Hexadecimal": "#770F05"
    },
    {
        "Color": [
            "Dark Byzantium"
        ],
        "Hexadecimal": "#5D3954"
    },
    {
        "Color": [
            "Dark Cornflower Blue"
        ],
        "Hexadecimal": "#26428B"
    },
    {
        "Color": [
            "Dark Cyan"
        ],
        "Hexadecimal": "#008B8B"
    },
    {
        "Color": [
            "Dark Ebony"
        ],
        "Hexadecimal": "#3C2005"
    },
    {
        "Color": [
            "Dark Electric Blue",
            "Payne's Grey"
        ],
        "Hexadecimal": "#536878"
    },
    {
        "Color": [
            "Dark Fern"
        ],
        "Hexadecimal": "#0A480D"
    },
    {
        "Color": [
            "Dark Goldenrod"
        ],
        "Hexadecimal": "#B8860B"
    },
    {
        "Color": [
            "Dark Green"
        ],
        "Hexadecimal": "#013220"
    },
    {
        "Color": [
            "Dark Green (X11)"
        ],
        "Hexadecimal": "#006400"
    },
    {
        "Color": [
            "Dark Jungle Green"
        ],
        "Hexadecimal": "#1A2421"
    },
    {
        "Color": [
            "Dark Khaki"
        ],
        "Hexadecimal": "#BDB76B"
    },
    {
        "Color": [
            "Dark Lava",
            "Taupe"
        ],
        "Hexadecimal": "#483C32"
    },
    {
        "Color": [
            "Dark Liver"
        ],
        "Hexadecimal": "#534B4F"
    },
    {
        "Color": [
            "Dark Liver (Horses)"
        ],
        "Hexadecimal": "#543D37"
    },
    {
        "Color": [
            "Dark Magenta"
        ],
        "Hexadecimal": "#8B008B"
    },
    {
        "Color": [
            "Dark Moss Green"
        ],
        "Hexadecimal": "#4A5D23"
    },
    {
        "Color": [
            "Dark Olive Green"
        ],
        "Hexadecimal": "#556B2F"
    },
    {
        "Color": [
            "Dark Orange"
        ],
        "Hexadecimal": "#FF8C00"
    },
    {
        "Color": [
            "Dark Orchid"
        ],
        "Hexadecimal": "#9932CC"
    },
    {
        "Color": [
            "Dark Pastel Green"
        ],
        "Hexadecimal": "#03C03C"
    },
    {
        "Color": [
            "Dark Purple"
        ],
        "Hexadecimal": "#301934"
    },
    {
        "Color": [
            "Dark Red"
        ],
        "Hexadecimal": "#8B0000"
    },
    {
        "Color": [
            "Dark Salmon"
        ],
        "Hexadecimal": "#E9967A"
    },
    {
        "Color": [
            "Dark Sea Green"
        ],
        "Hexadecimal": "#8FBC8F"
    },
    {
        "Color": [
            "Dark Sienna"
        ],
        "Hexadecimal": "#3C1414"
    },
    {
        "Color": [
            "Dark Sky Blue"
        ],
        "Hexadecimal": "#8CBED6"
    },
    {
        "Color": [
            "Dark Slate Blue"
        ],
        "Hexadecimal": "#483D8B"
    },
    {
        "Color": [
            "Dark Slate Gray"
        ],
        "Hexadecimal": "#2F4F4F"
    },
    {
        "Color": [
            "Dark Spring Green"
        ],
        "Hexadecimal": "#177245"
    },
    {
        "Color": [
            "Dark Tan"
        ],
        "Hexadecimal": "#661010"
    },
    {
        "Color": [
            "Dark Turquoise"
        ],
        "Hexadecimal": "#00CED1"
    },
    {
        "Color": [
            "Dark Violet"
        ],
        "Hexadecimal": "#9400D3"
    },
    {
        "Color": [
            "Dartmouth Green"
        ],
        "Hexadecimal": "#00703C"
    },
    {
        "Color": [
            "Davy's Grey"
        ],
        "Hexadecimal": "#555555"
    },
    {
        "Color": [
            "Dawn"
        ],
        "Hexadecimal": "#A6A29A"
    },
    {
        "Color": [
            "Dawn Pink"
        ],
        "Hexadecimal": "#F3E9E5"
    },
    {
        "Color": [
            "De York"
        ],
        "Hexadecimal": "#7AC488"
    },
    {
        "Color": [
            "Deco"
        ],
        "Hexadecimal": "#D2DA97"
    },
    {
        "Color": [
            "Deep Blue"
        ],
        "Hexadecimal": "#220878"
    },
    {
        "Color": [
            "Deep Blush"
        ],
        "Hexadecimal": "#E47698"
    },
    {
        "Color": [
            "Deep Bronze"
        ],
        "Hexadecimal": "#4A3004"
    },
    {
        "Color": [
            "Deep Cerise",
            "Cerise"
        ],
        "Hexadecimal": "#DA3287"
    },
    {
        "Color": [
            "Deep Champagne",
            "Sunset",
            "Tuscan"
        ],
        "Hexadecimal": "#FAD6A5"
    },
    {
        "Color": [
            "Deep Chestnut"
        ],
        "Hexadecimal": "#B94E48"
    },
    {
        "Color": [
            "Deep Cove"
        ],
        "Hexadecimal": "#051040"
    },
    {
        "Color": [
            "Deep Fir"
        ],
        "Hexadecimal": "#002900"
    },
    {
        "Color": [
            "Deep Forest Green"
        ],
        "Hexadecimal": "#182D09"
    },
    {
        "Color": [
            "Deep Jungle Green"
        ],
        "Hexadecimal": "#004B49"
    },
    {
        "Color": [
            "Deep Koamaru"
        ],
        "Hexadecimal": "#1B127B"
    },
    {
        "Color": [
            "Deep Oak"
        ],
        "Hexadecimal": "#412010"
    },
    {
        "Color": [
            "Deep Pink"
        ],
        "Hexadecimal": "#FF1493"
    },
    {
        "Color": [
            "Deep Saffron"
        ],
        "Hexadecimal": "#FF9933"
    },
    {
        "Color": [
            "Deep Sapphire"
        ],
        "Hexadecimal": "#082567"
    },
    {
        "Color": [
            "Deep Sea"
        ],
        "Hexadecimal": "#01826B"
    },
    {
        "Color": [
            "Deep Sea Green"
        ],
        "Hexadecimal": "#095859"
    },
    {
        "Color": [
            "Deep Space Sparkle"
        ],
        "Hexadecimal": "#4A646C"
    },
    {
        "Color": [
            "Deep Taupe"
        ],
        "Hexadecimal": "#7E5E60"
    },
    {
        "Color": [
            "Deep Teal"
        ],
        "Hexadecimal": "#003532"
    },
    {
        "Color": [
            "Del Rio"
        ],
        "Hexadecimal": "#B09A95"
    },
    {
        "Color": [
            "Dell"
        ],
        "Hexadecimal": "#396413"
    },
    {
        "Color": [
            "Delta"
        ],
        "Hexadecimal": "#A4A49D"
    },
    {
        "Color": [
            "Deluge"
        ],
        "Hexadecimal": "#7563A8"
    },
    {
        "Color": [
            "Denim"
        ],
        "Hexadecimal": "#1560BD"
    },
    {
        "Color": [
            "Denim Blue"
        ],
        "Hexadecimal": "#2243B6"
    },
    {
        "Color": [
            "Derby"
        ],
        "Hexadecimal": "#FFEED8"
    },
    {
        "Color": [
            "Desert"
        ],
        "Hexadecimal": "#AE6020"
    },
    {
        "Color": [
            "Desert Sand"
        ],
        "Hexadecimal": "#EDC9AF"
    },
    {
        "Color": [
            "Desert Storm"
        ],
        "Hexadecimal": "#F8F8F7"
    },
    {
        "Color": [
            "Dew"
        ],
        "Hexadecimal": "#EAFFFE"
    },
    {
        "Color": [
            "Di Serria"
        ],
        "Hexadecimal": "#DB995E"
    },
    {
        "Color": [
            "Diesel"
        ],
        "Hexadecimal": "#130000"
    },
    {
        "Color": [
            "Dim Gray"
        ],
        "Hexadecimal": "#696969"
    },
    {
        "Color": [
            "Dingley"
        ],
        "Hexadecimal": "#5D7747"
    },
    {
        "Color": [
            "Disco"
        ],
        "Hexadecimal": "#871550"
    },
    {
        "Color": [
            "Dixie"
        ],
        "Hexadecimal": "#E29418"
    },
    {
        "Color": [
            "Dodger Blue"
        ],
        "Hexadecimal": "#1E90FF"
    },
    {
        "Color": [
            "Dogwood Rose"
        ],
        "Hexadecimal": "#D71868"
    },
    {
        "Color": [
            "Dolly"
        ],
        "Hexadecimal": "#F9FF8B"
    },
    {
        "Color": [
            "Dolphin"
        ],
        "Hexadecimal": "#646077"
    },
    {
        "Color": [
            "Domino"
        ],
        "Hexadecimal": "#8E775E"
    },
    {
        "Color": [
            "Don Juan"
        ],
        "Hexadecimal": "#5D4C51"
    },
    {
        "Color": [
            "Donkey Brown"
        ],
        "Hexadecimal": "#A69279"
    },
    {
        "Color": [
            "Dorado"
        ],
        "Hexadecimal": "#6B5755"
    },
    {
        "Color": [
            "Double Colonial White"
        ],
        "Hexadecimal": "#EEE3AD"
    },
    {
        "Color": [
            "Double Pearl Lusta"
        ],
        "Hexadecimal": "#FCF4D0"
    },
    {
        "Color": [
            "Double Spanish White"
        ],
        "Hexadecimal": "#E6D7B9"
    },
    {
        "Color": [
            "Dove Gray"
        ],
        "Hexadecimal": "#6D6C6C"
    },
    {
        "Color": [
            "Downriver"
        ],
        "Hexadecimal": "#092256"
    },
    {
        "Color": [
            "Downy"
        ],
        "Hexadecimal": "#6FD0C5"
    },
    {
        "Color": [
            "Driftwood"
        ],
        "Hexadecimal": "#AF8751"
    },
    {
        "Color": [
            "Drover"
        ],
        "Hexadecimal": "#FDF7AD"
    },
    {
        "Color": [
            "Duke Blue"
        ],
        "Hexadecimal": "#00009C"
    },
    {
        "Color": [
            "Dull Lavender"
        ],
        "Hexadecimal": "#A899E6"
    },
    {
        "Color": [
            "Dune"
        ],
        "Hexadecimal": "#383533"
    },
    {
        "Color": [
            "Dust Storm"
        ],
        "Hexadecimal": "#E5CCC9"
    },
    {
        "Color": [
            "Dusty Gray"
        ],
        "Hexadecimal": "#A8989B"
    },
    {
        "Color": [
            "Dutch White"
        ],
        "Hexadecimal": "#EFDFBB"
    },
    {
        "Color": [
            "Eagle"
        ],
        "Hexadecimal": "#B6BAA4"
    },
    {
        "Color": [
            "Earls Green"
        ],
        "Hexadecimal": "#C9B93B"
    },
    {
        "Color": [
            "Early Dawn"
        ],
        "Hexadecimal": "#FFF9E6"
    },
    {
        "Color": [
            "Earth Yellow"
        ],
        "Hexadecimal": "#E1A95F"
    },
    {
        "Color": [
            "East Bay"
        ],
        "Hexadecimal": "#414C7D"
    },
    {
        "Color": [
            "East Side"
        ],
        "Hexadecimal": "#AC91CE"
    },
    {
        "Color": [
            "Eastern Blue"
        ],
        "Hexadecimal": "#1E9AB0"
    },
    {
        "Color": [
            "Ebb"
        ],
        "Hexadecimal": "#E9E3E3"
    },
    {
        "Color": [
            "Ebony"
        ],
        "Hexadecimal": "#555D50"
    },
    {
        "Color": [
            "Ebony 2"
        ],
        "Hexadecimal": "#0C0B1D"
    },
    {
        "Color": [
            "Ebony Clay"
        ],
        "Hexadecimal": "#26283B"
    },
    {
        "Color": [
            "Eclipse"
        ],
        "Hexadecimal": "#311C17"
    },
    {
        "Color": [
            "Ecru",
            "Sand"
        ],
        "Hexadecimal": "#C2B280"
    },
    {
        "Color": [
            "Ecru White"
        ],
        "Hexadecimal": "#F5F3E5"
    },
    {
        "Color": [
            "Ecstasy"
        ],
        "Hexadecimal": "#FA7814"
    },
    {
        "Color": [
            "Eden"
        ],
        "Hexadecimal": "#105852"
    },
    {
        "Color": [
            "Edgewater"
        ],
        "Hexadecimal": "#C8E3D7"
    },
    {
        "Color": [
            "Edward"
        ],
        "Hexadecimal": "#A2AEAB"
    },
    {
        "Color": [
            "Eerie Black"
        ],
        "Hexadecimal": "#1B1B1B"
    },
    {
        "Color": [
            "Egg Sour"
        ],
        "Hexadecimal": "#FFF4DD"
    },
    {
        "Color": [
            "Egg White"
        ],
        "Hexadecimal": "#FFEFC1"
    },
    {
        "Color": [
            "Eggplant"
        ],
        "Hexadecimal": "#614051"
    },
    {
        "Color": [
            "Eggshell"
        ],
        "Hexadecimal": "#F0EAD6"
    },
    {
        "Color": [
            "Egyptian Blue"
        ],
        "Hexadecimal": "#1034A6"
    },
    {
        "Color": [
            "Eigengrau"
        ],
        "Hexadecimal": "#16161D"
    },
    {
        "Color": [
            "El Paso"
        ],
        "Hexadecimal": "#1E1708"
    },
    {
        "Color": [
            "El Salva"
        ],
        "Hexadecimal": "#8F3E33"
    },
    {
        "Color": [
            "Electric Blue"
        ],
        "Hexadecimal": "#7DF9FF"
    },
    {
        "Color": [
            "Electric Green",
            "Green"

        ],
        "Hexadecimal": "#00FF00"
    },
    {
        "Color": [
            "Electric Indigo"
        ],
        "Hexadecimal": "#6F00FF"
    },
    {
        "Color": [
            "Electric Lime"
        ],
        "Hexadecimal": "#CCFF00"
    },
    {
        "Color": [
            "Electric Purple"
        ],
        "Hexadecimal": "#BF00FF"
    },
    {
        "Color": [
            "Electric Violet"
        ],
        "Hexadecimal": "#8B00FF"
    },
    {
        "Color": [
            "Electric Violet",
            "Violet"
        ],
        "Hexadecimal": "#8F00FF"
    },
    {
        "Color": [
            "Elephant"
        ],
        "Hexadecimal": "#123447"
    },
    {
        "Color": [
            "Elf Green"
        ],
        "Hexadecimal": "#088370"
    },
    {
        "Color": [
            "Elm"
        ],
        "Hexadecimal": "#1C7C7D"
    },
    {
        "Color": [
            "Emerald",
            "Paris Green"
        ],
        "Hexadecimal": "#50C878"
    },
    {
        "Color": [
            "Eminence"
        ],
        "Hexadecimal": "#6C3082"
    },
    {
        "Color": [
            "Emperor"
        ],
        "Hexadecimal": "#514649"
    },
    {
        "Color": [
            "Empress"
        ],
        "Hexadecimal": "#817377"
    },
    {
        "Color": [
            "Endeavour"
        ],
        "Hexadecimal": "#0056A7"
    },
    {
        "Color": [
            "Energy Yellow"
        ],
        "Hexadecimal": "#F8DD5C"
    },
    {
        "Color": [
            "English Holly"
        ],
        "Hexadecimal": "#022D15"
    },
    {
        "Color": [
            "English Lavender"
        ],
        "Hexadecimal": "#B48395"
    },
    {
        "Color": [
            "English Red"
        ],
        "Hexadecimal": "#AB4B52"
    },
    {
        "Color": [
            "English Vermillion"
        ],
        "Hexadecimal": "#CC474B"
    },
    {
        "Color": [
            "English Violet"
        ],
        "Hexadecimal": "#563C5C"
    },
    {
        "Color": [
            "English Walnut"
        ],
        "Hexadecimal": "#3E2B23"
    },
    {
        "Color": [
            "Envy"
        ],
        "Hexadecimal": "#8BA690"
    },
    {
        "Color": [
            "Equator"
        ],
        "Hexadecimal": "#E1BC64"
    },
    {
        "Color": [
            "Erin"
        ],
        "Hexadecimal": "#00FF40"
    },
    {
        "Color": [
            "Espresso"
        ],
        "Hexadecimal": "#612718"
    },
    {
        "Color": [
            "Eternity"
        ],
        "Hexadecimal": "#211A0E"
    },
    {
        "Color": [
            "Eton Blue"
        ],
        "Hexadecimal": "#96C8A2"
    },
    {
        "Color": [
            "Eucalyptus"
        ],
        "Hexadecimal": "#278A5B"
    },
    {
        "Color": [
            "Eunry"
        ],
        "Hexadecimal": "#CFA39D"
    },
    {
        "Color": [
            "Evening Sea"
        ],
        "Hexadecimal": "#024E46"
    },
    {
        "Color": [
            "Everglade"
        ],
        "Hexadecimal": "#1C402E"
    },
    {
        "Color": [
            "Faded Jade"
        ],
        "Hexadecimal": "#427977"
    },
    {
        "Color": [
            "Fair Pink"
        ],
        "Hexadecimal": "#FFEFEC"
    },
    {
        "Color": [
            "Falcon"
        ],
        "Hexadecimal": "#7F626D"
    },
    {
        "Color": [
            "Falu Red"
        ],
        "Hexadecimal": "#801818"
    },
    {
        "Color": [
            "Fandango"
        ],
        "Hexadecimal": "#B53389"
    },
    {
        "Color": [
            "Fandango Pink"
        ],
        "Hexadecimal": "#DE5285"
    },
    {
        "Color": [
            "Fantasy"
        ],
        "Hexadecimal": "#FAF3F0"
    },
    {
        "Color": [
            "Fashion Fuchsia",
            "Hollywood Cerise"
        ],
        "Hexadecimal": "#F400A1"
    },
    {
        "Color": [
            "Fawn"
        ],
        "Hexadecimal": "#E5AA70"
    },
    {
        "Color": [
            "Fedora"
        ],
        "Hexadecimal": "#796A78"
    },
    {
        "Color": [
            "Feijoa"
        ],
        "Hexadecimal": "#9FDD8C"
    },
    {
        "Color": [
            "Feldgrau"
        ],
        "Hexadecimal": "#4D5D53"
    },
    {
        "Color": [
            "Fern"
        ],
        "Hexadecimal": "#63B76C"
    },
    {
        "Color": [
            "Fern Frond"
        ],
        "Hexadecimal": "#657220"
    },
    {
        "Color": [
            "Fern Green"
        ],
        "Hexadecimal": "#4F7942"
    },
    {
        "Color": [
            "Ferra"
        ],
        "Hexadecimal": "#704F50"
    },
    {
        "Color": [
            "Festival"
        ],
        "Hexadecimal": "#FBE96C"
    },
    {
        "Color": [
            "Feta"
        ],
        "Hexadecimal": "#F0FCEA"
    },
    {
        "Color": [
            "Field Drab"
        ],
        "Hexadecimal": "#6C541E"
    },
    {
        "Color": [
            "Fiery Orange"
        ],
        "Hexadecimal": "#B35213"
    },
    {
        "Color": [
            "Fiery Rose"
        ],
        "Hexadecimal": "#FF5470"
    },
    {
        "Color": [
            "Finch"
        ],
        "Hexadecimal": "#626649"
    },
    {
        "Color": [
            "Finlandia"
        ],
        "Hexadecimal": "#556D56"
    },
    {
        "Color": [
            "Finn"
        ],
        "Hexadecimal": "#692D54"
    },
    {
        "Color": [
            "Fiord"
        ],
        "Hexadecimal": "#405169"
    },
    {
        "Color": [
            "Fire"
        ],
        "Hexadecimal": "#AA4203"
    },
    {
        "Color": [
            "Fire Bush"
        ],
        "Hexadecimal": "#E89928"
    },
    {
        "Color": [
            "Fire Engine Red"
        ],
        "Hexadecimal": "#CE2029"
    },
    {
        "Color": [
            "Fire Opal"
        ],
        "Hexadecimal": "#E95C4B"
    },
    {
        "Color": [
            "Firebrick"
        ],
        "Hexadecimal": "#B22222"
    },
    {
        "Color": [
            "Firefly"
        ],
        "Hexadecimal": "#0E2A30"
    },
    {
        "Color": [
            "Flame"
        ],
        "Hexadecimal": "#E25822"
    },
    {
        "Color": [
            "Flame Pea"
        ],
        "Hexadecimal": "#DA5B38"
    },
    {
        "Color": [
            "Flamenco"
        ],
        "Hexadecimal": "#FF7D07"
    },
    {
        "Color": [
            "Flamingo"
        ],
        "Hexadecimal": "#F2552A"
    },
    {
        "Color": [
            "Flax"
        ],
        "Hexadecimal": "#EEDC82"
    },
    {
        "Color": [
            "Flax Smoke"
        ],
        "Hexadecimal": "#7B8265"
    },
    {
        "Color": [
            "Flint"
        ],
        "Hexadecimal": "#6F6A61"
    },
    {
        "Color": [
            "Flirt"
        ],
        "Hexadecimal": "#A2006D"
    },
    {
        "Color": [
            "Floral White"
        ],
        "Hexadecimal": "#FFFAF0"
    },
    {
        "Color": [
            "Fluorescent Blue"
        ],
        "Hexadecimal": "#15F4EE"
    },
    {
        "Color": [
            "Flush Mahogany"
        ],
        "Hexadecimal": "#CA3435"
    },
    {
        "Color": [
            "Foam"
        ],
        "Hexadecimal": "#D8FCFA"
    },
    {
        "Color": [
            "Fog"
        ],
        "Hexadecimal": "#D7D0FF"
    },
    {
        "Color": [
            "Foggy Gray"
        ],
        "Hexadecimal": "#CBCAB6"
    },
    {
        "Color": [
            "Forest Green (Crayola)",
            "Aqua Forest"
        ],
        "Hexadecimal": "#5FA777"
    },
    {
        "Color": [
            "Forest Green (Traditional)",
            "UP Forest Green"
        ],
        "Hexadecimal": "#014421"
    },
    {
        "Color": [
            "Forest Green (Web)",
            "Forest Green"
        ],
        "Hexadecimal": "#228B22"
    },
    {
        "Color": [
            "Forget Me Not"
        ],
        "Hexadecimal": "#FFF1EE"
    },
    {
        "Color": [
            "Fountain Blue"
        ],
        "Hexadecimal": "#56B4BE"
    },
    {
        "Color": [
            "Frangipani"
        ],
        "Hexadecimal": "#FFDEB3"
    },
    {
        "Color": [
            "French Bistre"
        ],
        "Hexadecimal": "#856D4D"
    },
    {
        "Color": [
            "French Blue"
        ],
        "Hexadecimal": "#0072BB"
    },
    {
        "Color": [
            "French Fuchsia"
        ],
        "Hexadecimal": "#FD3F92"
    },
    {
        "Color": [
            "French Gray"
        ],
        "Hexadecimal": "#BDBDC6"
    },
    {
        "Color": [
            "French Lilac"
        ],
        "Hexadecimal": "#ECC7EE"
    },
    {
        "Color": [
            "French Lime"
        ],
        "Hexadecimal": "#9EFD38"
    },
    {
        "Color": [
            "French Mauve"
        ],
        "Hexadecimal": "#D473D4"
    },
    {
        "Color": [
            "French Pass"
        ],
        "Hexadecimal": "#BDEDFD"
    },
    {
        "Color": [
            "French Pink"
        ],
        "Hexadecimal": "#FD6C9E"
    },
    {
        "Color": [
            "French Raspberry"
        ],
        "Hexadecimal": "#C72C48"
    },
    {
        "Color": [
            "French Rose"
        ],
        "Hexadecimal": "#F64A8A"
    },
    {
        "Color": [
            "French Sky Blue"
        ],
        "Hexadecimal": "#77B5FE"
    },
    {
        "Color": [
            "French Violet"
        ],
        "Hexadecimal": "#8806CE"
    },
    {
        "Color": [
            "Fresh Eggplant"
        ],
        "Hexadecimal": "#990066"
    },
    {
        "Color": [
            "Friar Gray"
        ],
        "Hexadecimal": "#807E79"
    },
    {
        "Color": [
            "Fringy Flower"
        ],
        "Hexadecimal": "#B1E2C1"
    },
    {
        "Color": [
            "Froly"
        ],
        "Hexadecimal": "#F57584"
    },
    {
        "Color": [
            "Frost"
        ],
        "Hexadecimal": "#EDF5DD"
    },
    {
        "Color": [
            "Frostbite"
        ],
        "Hexadecimal": "#E936A7"
    },
    {
        "Color": [
            "Frosted Mint"
        ],
        "Hexadecimal": "#DBFFF8"
    },
    {
        "Color": [
            "Frostee"
        ],
        "Hexadecimal": "#E4F6E7"
    },
    {
        "Color": [
            "Fruit Salad"
        ],
        "Hexadecimal": "#4F9D5D"
    },
    {
        "Color": [
            "Fuchsia (Crayola)",
            "Fuchsia Pink"
        ],
        "Hexadecimal": "#C154C1"
    },
    {
        "Color": [
            "Fuchsia",
            "Magenta"
        ],
        "Hexadecimal": "#FF00FF"
    },
    {
        "Color": [
            "Fuchsia Blue"
        ],
        "Hexadecimal": "#7A58C1"
    },
    {
        "Color": [
            "Fuchsia Purple"
        ],
        "Hexadecimal": "#CC397B"
    },
    {
        "Color": [
            "Fuchsia Rose"
        ],
        "Hexadecimal": "#C74375"
    },
    {
        "Color": [
            "Fuego"
        ],
        "Hexadecimal": "#BEDE0D"
    },
    {
        "Color": [
            "Fuel Yellow"
        ],
        "Hexadecimal": "#ECA927"
    },
    {
        "Color": [
            "Fulvous"
        ],
        "Hexadecimal": "#E48400"
    },
    {
        "Color": [
            "Fun Blue"
        ],
        "Hexadecimal": "#1959A8"
    },
    {
        "Color": [
            "Fun Green"
        ],
        "Hexadecimal": "#016D39"
    },
    {
        "Color": [
            "Fuscous Gray"
        ],
        "Hexadecimal": "#54534D"
    },
    {
        "Color": [
            "Fuzzy Wuzzy"
        ],
        "Hexadecimal": "#87421F"
    },
    {
        "Color": [
            "Fuzzy Wuzzy Brown"
        ],
        "Hexadecimal": "#C45655"
    },
    {
        "Color": [
            "Gable Green"
        ],
        "Hexadecimal": "#163531"
    },
    {
        "Color": [
            "Gainsboro"
        ],
        "Hexadecimal": "#DCDCDC"
    },
    {
        "Color": [
            "Gallery"
        ],
        "Hexadecimal": "#EFEFEF"
    },
    {
        "Color": [
            "Galliano"
        ],
        "Hexadecimal": "#DCB20C"
    },
    {
        "Color": [
            "Gamboge"
        ],
        "Hexadecimal": "#E49B0F"
    },
    {
        "Color": [
            "Geebung"
        ],
        "Hexadecimal": "#D18F1B"
    },
    {
        "Color": [
            "Generic Viridian"
        ],
        "Hexadecimal": "#007F66"
    },
    {
        "Color": [
            "Genoa"
        ],
        "Hexadecimal": "#15736B"
    },
    {
        "Color": [
            "Geraldine"
        ],
        "Hexadecimal": "#FB8989"
    },
    {
        "Color": [
            "Geyser"
        ],
        "Hexadecimal": "#D4DFE2"
    },
    {
        "Color": [
            "Ghost"
        ],
        "Hexadecimal": "#C7C9D5"
    },
    {
        "Color": [
            "Ghost White"
        ],
        "Hexadecimal": "#F8F8FF"
    },
    {
        "Color": [
            "Gigas"
        ],
        "Hexadecimal": "#523C94"
    },
    {
        "Color": [
            "Gimblet"
        ],
        "Hexadecimal": "#B8B56A"
    },
    {
        "Color": [
            "Gin"
        ],
        "Hexadecimal": "#E8F2EB"
    },
    {
        "Color": [
            "Gin Fizz"
        ],
        "Hexadecimal": "#FFF9E2"
    },
    {
        "Color": [
            "Givry"
        ],
        "Hexadecimal": "#F8E4BF"
    },
    {
        "Color": [
            "Glacier"
        ],
        "Hexadecimal": "#80B3C4"
    },
    {
        "Color": [
            "Glade Green"
        ],
        "Hexadecimal": "#61845F"
    },
    {
        "Color": [
            "Glaucous"
        ],
        "Hexadecimal": "#6082B6"
    },
    {
        "Color": [
            "Glossy Grape"
        ],
        "Hexadecimal": "#AB92B3"
    },
    {
        "Color": [
            "Go Ben"
        ],
        "Hexadecimal": "#726D4E"
    },
    {
        "Color": [
            "Go Green"
        ],
        "Hexadecimal": "#00AB66"
    },
    {
        "Color": [
            "Goblin"
        ],
        "Hexadecimal": "#3D7D52"
    },
    {
        "Color": [
            "Gold"
        ],
        "Hexadecimal": "#A57C00"
    },
    {
        "Color": [
            "Gold (Crayola)",
            "Gold Sand"
        ],
        "Hexadecimal": "#E6BE8A"
    },
    {
        "Color": [
            "Gold (Metallic)"
        ],
        "Hexadecimal": "#D4AF37"
    },
    {
        "Color": [
            "Gold (Web) (Golden)"
        ],
        "Hexadecimal": "#FFD700"
    },
    {
        "Color": [
            "Gold Drop"
        ],
        "Hexadecimal": "#F18200"
    },
    {
        "Color": [
            "Gold Fusion"
        ],
        "Hexadecimal": "#85754E"
    },
    {
        "Color": [
            "Gold Tips"
        ],
        "Hexadecimal": "#DEBA13"
    },
    {
        "Color": [
            "Golden Bell"
        ],
        "Hexadecimal": "#E28913"
    },
    {
        "Color": [
            "Golden Brown"
        ],
        "Hexadecimal": "#996515"
    },
    {
        "Color": [
            "Golden Dream"
        ],
        "Hexadecimal": "#F0D52D"
    },
    {
        "Color": [
            "Golden Fizz"
        ],
        "Hexadecimal": "#F5FB3D"
    },
    {
        "Color": [
            "Golden Glow"
        ],
        "Hexadecimal": "#FDE295"
    },
    {
        "Color": [
            "Golden Grass"
        ],
        "Hexadecimal": "#DAA520"
    },
    {
        "Color": [
            "Golden Poppy"
        ],
        "Hexadecimal": "#FCC200"
    },
    {
        "Color": [
            "Golden Sand"
        ],
        "Hexadecimal": "#F0DB7D"
    },
    {
        "Color": [
            "Golden Tainoi"
        ],
        "Hexadecimal": "#FFCC5C"
    },
    {
        "Color": [
            "Golden Yellow"
        ],
        "Hexadecimal": "#FFDF00"
    },
    {
        "Color": [
            "Goldenrod"
        ],
        "Hexadecimal": "#FCD667"
    },
    {
        "Color": [
            "Gondola"
        ],
        "Hexadecimal": "#261414"
    },
    {
        "Color": [
            "Gordons Green"
        ],
        "Hexadecimal": "#0B1107"
    },
    {
        "Color": [
            "Gorse"
        ],
        "Hexadecimal": "#FFF14F"
    },
    {
        "Color": [
            "Gossamer"
        ],
        "Hexadecimal": "#069B81"
    },
    {
        "Color": [
            "Gossip"
        ],
        "Hexadecimal": "#D2F8B0"
    },
    {
        "Color": [
            "Gotham Green"
        ],
        "Hexadecimal": "#00573F"
    },
    {
        "Color": [
            "Gothic"
        ],
        "Hexadecimal": "#6D92A1"
    },
    {
        "Color": [
            "Governor Bay"
        ],
        "Hexadecimal": "#2F3CB3"
    },
    {
        "Color": [
            "Grain Brown"
        ],
        "Hexadecimal": "#E4D5B7"
    },
    {
        "Color": [
            "Grandis"
        ],
        "Hexadecimal": "#FFD38C"
    },
    {
        "Color": [
            "Granite Gray"
        ],
        "Hexadecimal": "#676767"
    },
    {
        "Color": [
            "Granite Green"
        ],
        "Hexadecimal": "#8D8974"
    },
    {
        "Color": [
            "Granny Apple"
        ],
        "Hexadecimal": "#D5F6E3"
    },
    {
        "Color": [
            "Granny Smith"
        ],
        "Hexadecimal": "#84A0A0"
    },
    {
        "Color": [
            "Granny Smith Apple"
        ],
        "Hexadecimal": "#A8E4A0"
    },
    {
        "Color": [
            "Granny Smith Apple 2"
        ],
        "Hexadecimal": "#9DE093"
    },
    {
        "Color": [
            "Grape"
        ],
        "Hexadecimal": "#381A51"
    },
    {
        "Color": [
            "Graphite"
        ],
        "Hexadecimal": "#251607"
    },
    {
        "Color": [
            "Gravel"
        ],
        "Hexadecimal": "#4A444B"
    },
    {
        "Color": [
            "Grey",
            "Gray"
        ],
        "Hexadecimal": "#808080"
    },
    {
        "Color": [
            "Gray (X11 Gray)"
        ],
        "Hexadecimal": "#BEBEBE"
    },
    {
        "Color": [
            "Gray Asparagus"
        ],
        "Hexadecimal": "#465945"
    },
    {
        "Color": [
            "Gray Chateau"
        ],
        "Hexadecimal": "#A2AAB3"
    },
    {
        "Color": [
            "Gray Nickel"
        ],
        "Hexadecimal": "#C3C3BD"
    },
    {
        "Color": [
            "Gray Nurse"
        ],
        "Hexadecimal": "#E7ECE6"
    },
    {
        "Color": [
            "Gray Olive"
        ],
        "Hexadecimal": "#A9A491"
    },
    {
        "Color": [
            "Gray Suit"
        ],
        "Hexadecimal": "#C1BECD"
    },
    {
        "Color": [
            "Green (Crayola)"
        ],
        "Hexadecimal": "#1CAC78"
    },
    {
        "Color": [
            "Green (MUNSELL)"
        ],
        "Hexadecimal": "#00A877"
    },
    {
        "Color": [
            "Green (NCS)"
        ],
        "Hexadecimal": "#009F6B"
    },
    {
        "Color": [
            "Green (PANTONE)"
        ],
        "Hexadecimal": "#00AD43"
    },
    {
        "Color": [
            "Green (Pigment)"
        ],
        "Hexadecimal": "#00A550"
    },
    {
        "Color": [
            "Green (RYB)"
        ],
        "Hexadecimal": "#66B032"
    },
    {
        "Color": [
            "Green Haze"
        ],
        "Hexadecimal": "#01A368"
    },
    {
        "Color": [
            "Green House"
        ],
        "Hexadecimal": "#24500F"
    },
    {
        "Color": [
            "Green Kelp"
        ],
        "Hexadecimal": "#25311C"
    },
    {
        "Color": [
            "Green Leaf"
        ],
        "Hexadecimal": "#436A0D"
    },
    {
        "Color": [
            "Green Lizard"
        ],
        "Hexadecimal": "#A7F432"
    },
    {
        "Color": [
            "Green Mist"
        ],
        "Hexadecimal": "#CBD3B0"
    },
    {
        "Color": [
            "Green Pea"
        ],
        "Hexadecimal": "#1D6142"
    },
    {
        "Color": [
            "Green Sheen"
        ],
        "Hexadecimal": "#6EAEA1"
    },
    {
        "Color": [
            "Green Smoke"
        ],
        "Hexadecimal": "#A4AF6E"
    },
    {
        "Color": [
            "Green Spring"
        ],
        "Hexadecimal": "#B8C1B1"
    },
    {
        "Color": [
            "Green Vogue"
        ],
        "Hexadecimal": "#032B52"
    },
    {
        "Color": [
            "Green Waterloo"
        ],
        "Hexadecimal": "#101405"
    },
    {
        "Color": [
            "Green White"
        ],
        "Hexadecimal": "#E8EBE0"
    },
    {
        "Color": [
            "Green-Blue"
        ],
        "Hexadecimal": "#1164B4"
    },
    {
        "Color": [
            "Green-Blue (Crayola)"
        ],
        "Hexadecimal": "#2887C8"
    },
    {
        "Color": [
            "Green-Cyan"
        ],
        "Hexadecimal": "#009966"
    },
    {
        "Color": [
            "Green-Yellow (Crayola)"
        ],
        "Hexadecimal": "#F0E891"
    },
    {
        "Color": [
            "Green-Yellow",
            "Green Yellow"
        ],
        "Hexadecimal": "#ADFF2F"
    },
    {
        "Color": [
            "Grenadier"
        ],
        "Hexadecimal": "#D54600"
    },
    {
        "Color": [
            "Grullo"
        ],
        "Hexadecimal": "#A99A86"
    },
    {
        "Color": [
            "Guardsman Red"
        ],
        "Hexadecimal": "#BA0101"
    },
    {
        "Color": [
            "Gulf Blue"
        ],
        "Hexadecimal": "#051657"
    },
    {
        "Color": [
            "Gulf Stream"
        ],
        "Hexadecimal": "#80B3AE"
    },
    {
        "Color": [
            "Gull Gray"
        ],
        "Hexadecimal": "#9DACB7"
    },
    {
        "Color": [
            "Gum Leaf"
        ],
        "Hexadecimal": "#B6D3BF"
    },
    {
        "Color": [
            "Gumbo"
        ],
        "Hexadecimal": "#7CA1A6"
    },
    {
        "Color": [
            "Gun Powder"
        ],
        "Hexadecimal": "#414257"
    },
    {
        "Color": [
            "Gunmetal"
        ],
        "Hexadecimal": "#2a3439"
    },
    {
        "Color": [
            "Gunsmoke"
        ],
        "Hexadecimal": "#828685"
    },
    {
        "Color": [
            "Gurkha"
        ],
        "Hexadecimal": "#9A9577"
    },
    {
        "Color": [
            "Hacienda"
        ],
        "Hexadecimal": "#98811B"
    },
    {
        "Color": [
            "Hairy Heath"
        ],
        "Hexadecimal": "#6B2A14"
    },
    {
        "Color": [
            "Haiti"
        ],
        "Hexadecimal": "#1B1035"
    },
    {
        "Color": [
            "Half And Half"
        ],
        "Hexadecimal": "#FFFEE1"
    },
    {
        "Color": [
            "Half Baked"
        ],
        "Hexadecimal": "#85C4CC"
    },
    {
        "Color": [
            "Half Colonial White"
        ],
        "Hexadecimal": "#FDF6D3"
    },
    {
        "Color": [
            "Half Dutch White"
        ],
        "Hexadecimal": "#FEF7DE"
    },
    {
        "Color": [
            "Half Spanish White"
        ],
        "Hexadecimal": "#FEF4DB"
    },
    {
        "Color": [
            "Hampton"
        ],
        "Hexadecimal": "#E5D8AF"
    },
    {
        "Color": [
            "Han Blue"
        ],
        "Hexadecimal": "#446CCF"
    },
    {
        "Color": [
            "Han Purple"
        ],
        "Hexadecimal": "#5218FA"
    },
    {
        "Color": [
            "Harlequin"
        ],
        "Hexadecimal": "#3FFF00"
    },
    {
        "Color": [
            "Harp"
        ],
        "Hexadecimal": "#E6F2EA"
    },
    {
        "Color": [
            "Harvest Gold"
        ],
        "Hexadecimal": "#E0B974"
    },
    {
        "Color": [
            "Harvest Gold 2"
        ],
        "Hexadecimal": "#DA9100"
    },
    {
        "Color": [
            "Havelock Blue"
        ],
        "Hexadecimal": "#5590D9"
    },
    {
        "Color": [
            "Hawaiian Tan"
        ],
        "Hexadecimal": "#9D5616"
    },
    {
        "Color": [
            "Hawkes Blue"
        ],
        "Hexadecimal": "#D4E2FC"
    },
    {
        "Color": [
            "Heat Wave"
        ],
        "Hexadecimal": "#FF7A00"
    },
    {
        "Color": [
            "Heath"
        ],
        "Hexadecimal": "#541012"
    },
    {
        "Color": [
            "Heather"
        ],
        "Hexadecimal": "#B7C3D0"
    },
    {
        "Color": [
            "Heathered Gray"
        ],
        "Hexadecimal": "#B6B095"
    },
    {
        "Color": [
            "Heavy Metal"
        ],
        "Hexadecimal": "#2B3228"
    },
    {
        "Color": [
            "Heliotrope"
        ],
        "Hexadecimal": "#DF73FF"
    },
    {
        "Color": [
            "Heliotrope Gray",
            "Rose Quartz"
        ],
        "Hexadecimal": "#AA98A9"
    },
    {
        "Color": [
            "Hemlock"
        ],
        "Hexadecimal": "#5E5D3B"
    },
    {
        "Color": [
            "Hemp"
        ],
        "Hexadecimal": "#907874"
    },
    {
        "Color": [
            "Hibiscus"
        ],
        "Hexadecimal": "#B6316C"
    },
    {
        "Color": [
            "Highland"
        ],
        "Hexadecimal": "#6F8E63"
    },
    {
        "Color": [
            "Hillary"
        ],
        "Hexadecimal": "#ACA586"
    },
    {
        "Color": [
            "Himalaya"
        ],
        "Hexadecimal": "#6A5D1B"
    },
    {
        "Color": [
            "Hint Of Green"
        ],
        "Hexadecimal": "#E6FFE9"
    },
    {
        "Color": [
            "Hint Of Red"
        ],
        "Hexadecimal": "#FBF9F9"
    },
    {
        "Color": [
            "Hint Of Yellow"
        ],
        "Hexadecimal": "#FAFDE4"
    },
    {
        "Color": [
            "Hippie Blue"
        ],
        "Hexadecimal": "#589AAF"
    },
    {
        "Color": [
            "Hippie Green"
        ],
        "Hexadecimal": "#53824B"
    },
    {
        "Color": [
            "Hippie Pink"
        ],
        "Hexadecimal": "#AE4560"
    },
    {
        "Color": [
            "Hit Gray"
        ],
        "Hexadecimal": "#A1ADB5"
    },
    {
        "Color": [
            "Hit Pink"
        ],
        "Hexadecimal": "#FFAB81"
    },
    {
        "Color": [
            "Hokey Pokey"
        ],
        "Hexadecimal": "#C8A528"
    },
    {
        "Color": [
            "Hoki"
        ],
        "Hexadecimal": "#65869F"
    },
    {
        "Color": [
            "Holly"
        ],
        "Hexadecimal": "#011D13"
    },
    {
        "Color": [
            "Honey Flower"
        ],
        "Hexadecimal": "#4F1C70"
    },
    {
        "Color": [
            "Honeydew"
        ],
        "Hexadecimal": "#F0FFF0"
    },
    {
        "Color": [
            "Honeysuckle"
        ],
        "Hexadecimal": "#EDFC84"
    },
    {
        "Color": [
            "Honolulu Blue"
        ],
        "Hexadecimal": "#006DB0"
    },
    {
        "Color": [
            "Hooker's Green"
        ],
        "Hexadecimal": "#49796B"
    },
    {
        "Color": [
            "Hopbush"
        ],
        "Hexadecimal": "#D06DA1"
    },
    {
        "Color": [
            "Horizon"
        ],
        "Hexadecimal": "#5A87A0"
    },
    {
        "Color": [
            "Horses Neck"
        ],
        "Hexadecimal": "#604913"
    },
    {
        "Color": [
            "Hot Magenta"
        ],
        "Hexadecimal": "#FF1DCE"
    },
    {
        "Color": [
            "Hot Pink"
        ],
        "Hexadecimal": "#FF69B4"
    },
    {
        "Color": [
            "Hot Toddy"
        ],
        "Hexadecimal": "#B38007"
    },
    {
        "Color": [
            "Humming Bird"
        ],
        "Hexadecimal": "#CFF9F3"
    },
    {
        "Color": [
            "Hunter Green"
        ],
        "Hexadecimal": "#355E3B"
    },
    {
        "Color": [
            "Hunter Green 2"
        ],
        "Hexadecimal": "#161D10"
    },
    {
        "Color": [
            "Hurricane"
        ],
        "Hexadecimal": "#877C7B"
    },
    {
        "Color": [
            "Husk"
        ],
        "Hexadecimal": "#B7A458"
    },
    {
        "Color": [
            "Ice Cold"
        ],
        "Hexadecimal": "#B1F4E7"
    },
    {
        "Color": [
            "Iceberg"
        ],
        "Hexadecimal": "#DAF4F0"
    },
    {
        "Color": [
            "Iceberg 2"
        ],
        "Hexadecimal": "#71A6D2"
    },
    {
        "Color": [
            "Icterine"
        ],
        "Hexadecimal": "#FCF75E"
    },
    {
        "Color": [
            "Illuminating Emerald"
        ],
        "Hexadecimal": "#319177"
    },
    {
        "Color": [
            "Illusion"
        ],
        "Hexadecimal": "#F6A4C9"
    },
    {
        "Color": [
            "Imperial Red",
            "Red (PANTONE)"
        ],
        "Hexadecimal": "#ED2939"
    },
    {
        "Color": [
            "Inch Worm"
        ],
        "Hexadecimal": "#B0E313"
    },
    {
        "Color": [
            "Inchworm"
        ],
        "Hexadecimal": "#B2EC5D"
    },
    {
        "Color": [
            "Independence"
        ],
        "Hexadecimal": "#4C516D"
    },
    {
        "Color": [
            "India Green"
        ],
        "Hexadecimal": "#138808"
    },
    {
        "Color": [
            "Indian Red",
            "Chestnut Rose"
        ],
        "Hexadecimal": "#CD5C5C"
    },
    {
        "Color": [
            "Indian Tan"
        ],
        "Hexadecimal": "#4D1E01"
    },
    {
        "Color": [
            "Indian Yellow"
        ],
        "Hexadecimal": "#E3A857"
    },
    {
        "Color": [
            "Indigo"
        ],
        "Hexadecimal": "#4F69C6"
    },
    {
        "Color": [
            "Indigo Dye"
        ],
        "Hexadecimal": "#00416A"
    },
    {
        "Color": [
            "Indochine"
        ],
        "Hexadecimal": "#C26B03"
    },
    {
        "Color": [
            "International Klein Blue"
        ],
        "Hexadecimal": "#002FA7"
    },
    {
        "Color": [
            "International Klein Blue 2"
        ],
        "Hexadecimal": "#130a8f"
    },
    {
        "Color": [
            "International Orange (Aerospace)",
            "International Orange"
        ],
        "Hexadecimal": "#FF4F00"
    },
    {
        "Color": [
            "International Orange (Engineering)"
        ],
        "Hexadecimal": "#BA160C"
    },
    {
        "Color": [
            "International Orange (Golden Gate Bridge)"
        ],
        "Hexadecimal": "#C0362C"
    },
    {
        "Color": [
            "Iris"
        ],
        "Hexadecimal": "#5A4FCF"
    },
    {
        "Color": [
            "Irish Coffee"
        ],
        "Hexadecimal": "#5F3D26"
    },
    {
        "Color": [
            "Iroko"
        ],
        "Hexadecimal": "#433120"
    },
    {
        "Color": [
            "Iron"
        ],
        "Hexadecimal": "#D4D7D9"
    },
    {
        "Color": [
            "Ironside Gray"
        ],
        "Hexadecimal": "#676662"
    },
    {
        "Color": [
            "Ironstone"
        ],
        "Hexadecimal": "#86483C"
    },
    {
        "Color": [
            "Irresistible",
            "Raspberry Rose"
        ],
        "Hexadecimal": "#B3446C"
    },
    {
        "Color": [
            "Isabelline"
        ],
        "Hexadecimal": "#F4F0EC"
    },
    {
        "Color": [
            "Island Spice"
        ],
        "Hexadecimal": "#FFFCEE"
    },
    {
        "Color": [
            "Italian Sky Blue"
        ],
        "Hexadecimal": "#B2FFFF"
    },
    {
        "Color": [
            "Ivory"
        ],
        "Hexadecimal": "#FFFFF0"
    },
    {
        "Color": [
            "Jacaranda"
        ],
        "Hexadecimal": "#2E0329"
    },
    {
        "Color": [
            "Jacarta"
        ],
        "Hexadecimal": "#3A2A6A"
    },
    {
        "Color": [
            "Jacko Bean"
        ],
        "Hexadecimal": "#2E1905"
    },
    {
        "Color": [
            "Jacksons Purple"
        ],
        "Hexadecimal": "#20208D"
    },
    {
        "Color": [
            "Jade"
        ],
        "Hexadecimal": "#00A86B"
    },
    {
        "Color": [
            "Jaffa"
        ],
        "Hexadecimal": "#EF863F"
    },
    {
        "Color": [
            "Jagged Ice"
        ],
        "Hexadecimal": "#C2E8E5"
    },
    {
        "Color": [
            "Jagger"
        ],
        "Hexadecimal": "#350E57"
    },
    {
        "Color": [
            "Jaguar"
        ],
        "Hexadecimal": "#080110"
    },
    {
        "Color": [
            "Jambalaya"
        ],
        "Hexadecimal": "#5B3013"
    },
    {
        "Color": [
            "Janna"
        ],
        "Hexadecimal": "#F4EBD3"
    },
    {
        "Color": [
            "Japanese Carmine"
        ],
        "Hexadecimal": "#9D2933"
    },
    {
        "Color": [
            "Japanese Laurel"
        ],
        "Hexadecimal": "#0A6906"
    },
    {
        "Color": [
            "Japanese Maple"
        ],
        "Hexadecimal": "#780109"
    },
    {
        "Color": [
            "Japanese Violet"
        ],
        "Hexadecimal": "#5B3256"
    },
    {
        "Color": [
            "Japonica"
        ],
        "Hexadecimal": "#D87C63"
    },
    {
        "Color": [
            "Jasmine",
            "Mellow Yellow"
        ],
        "Hexadecimal": "#F8DE7E"
    },
    {
        "Color": [
            "Java"
        ],
        "Hexadecimal": "#1FC2C2"
    },
    {
        "Color": [
            "Jazzberry Jam"
        ],
        "Hexadecimal": "#A50B5E"
    },
    {
        "Color": [
            "Jelly Bean"
        ],
        "Hexadecimal": "#297B9A"
    },
    {
        "Color": [
            "Jet"
        ],
        "Hexadecimal": "#343434"
    },
    {
        "Color": [
            "Jet Stream"
        ],
        "Hexadecimal": "#B5D2CE"
    },
    {
        "Color": [
            "Jewel"
        ],
        "Hexadecimal": "#126B40"
    },
    {
        "Color": [
            "Jon"
        ],
        "Hexadecimal": "#3B1F1F"
    },
    {
        "Color": [
            "Jonquil"
        ],
        "Hexadecimal": "#F4CA16"
    },
    {
        "Color": [
            "Jonquil 2"
        ],
        "Hexadecimal": "#EEFF9A"
    },
    {
        "Color": [
            "Jordy Blue"
        ],
        "Hexadecimal": "#8AB9F1"
    },
    {
        "Color": [
            "Judge Gray"
        ],
        "Hexadecimal": "#544333"
    },
    {
        "Color": [
            "Jumbo"
        ],
        "Hexadecimal": "#7C7B82"
    },
    {
        "Color": [
            "June Bud"
        ],
        "Hexadecimal": "#BDDA57"
    },
    {
        "Color": [
            "Jungle Green"
        ],
        "Hexadecimal": "#29AB87"
    },
    {
        "Color": [
            "Jungle Mist"
        ],
        "Hexadecimal": "#B4CFD3"
    },
    {
        "Color": [
            "Juniper"
        ],
        "Hexadecimal": "#6D9292"
    },
    {
        "Color": [
            "Just Right"
        ],
        "Hexadecimal": "#ECCDB9"
    },
    {
        "Color": [
            "Kabul"
        ],
        "Hexadecimal": "#5E483E"
    },
    {
        "Color": [
            "Kaitoke Green"
        ],
        "Hexadecimal": "#004620"
    },
    {
        "Color": [
            "Kangaroo"
        ],
        "Hexadecimal": "#C6C8BD"
    },
    {
        "Color": [
            "Karaka"
        ],
        "Hexadecimal": "#1E1609"
    },
    {
        "Color": [
            "Karry"
        ],
        "Hexadecimal": "#FFEAD4"
    },
    {
        "Color": [
            "Kashmir Blue"
        ],
        "Hexadecimal": "#507096"
    },
    {
        "Color": [
            "Kelly Green"
        ],
        "Hexadecimal": "#4CBB17"
    },
    {
        "Color": [
            "Kelp"
        ],
        "Hexadecimal": "#454936"
    },
    {
        "Color": [
            "Kenyan Copper"
        ],
        "Hexadecimal": "#7C1C05"
    },
    {
        "Color": [
            "Keppel"
        ],
        "Hexadecimal": "#3AB09E"
    },
    {
        "Color": [
            "Key Lime"
        ],
        "Hexadecimal": "#E8F48C"
    },
    {
        "Color": [
            "Key Lime Pie"
        ],
        "Hexadecimal": "#BFC921"
    },
    {
        "Color": [
            "Khaki (Web)",
            "Indian Khaki"
        ],
        "Hexadecimal": "#C3B091"
    },
    {
        "Color": [
            "Khaki (X11) (Light Khaki)",
            "Khaki"
        ],
        "Hexadecimal": "#F0E68C"
    },
    {
        "Color": [
            "Kidnapper"
        ],
        "Hexadecimal": "#E1EAD4"
    },
    {
        "Color": [
            "Kilamanjaro"
        ],
        "Hexadecimal": "#240C02"
    },
    {
        "Color": [
            "Killarney"
        ],
        "Hexadecimal": "#3A6A47"
    },
    {
        "Color": [
            "Kimberly"
        ],
        "Hexadecimal": "#736C9F"
    },
    {
        "Color": [
            "Kingfisher Daisy"
        ],
        "Hexadecimal": "#3E0480"
    },
    {
        "Color": [
            "Kobe",
            "Sienna"
        ],
        "Hexadecimal": "#882D17"
    },
    {
        "Color": [
            "Kobi"
        ],
        "Hexadecimal": "#E79FC4"
    },
    {
        "Color": [
            "Kobicha"
        ],
        "Hexadecimal": "#6B4423"
    },
    {
        "Color": [
            "Kokoda"
        ],
        "Hexadecimal": "#6E6D57"
    },
    {
        "Color": [
            "Kombu Green"
        ],
        "Hexadecimal": "#354230"
    },
    {
        "Color": [
            "Korma"
        ],
        "Hexadecimal": "#8F4B0E"
    },
    {
        "Color": [
            "Koromiko"
        ],
        "Hexadecimal": "#FFBD5F"
    },
    {
        "Color": [
            "Kournikova"
        ],
        "Hexadecimal": "#FFE772"
    },
    {
        "Color": [
            "Ksu Purple"
        ],
        "Hexadecimal": "#512888"
    },
    {
        "Color": [
            "Kumera"
        ],
        "Hexadecimal": "#886221"
    },
    {
        "Color": [
            "La Palma"
        ],
        "Hexadecimal": "#368716"
    },
    {
        "Color": [
            "La Rioja"
        ],
        "Hexadecimal": "#B3C110"
    },
    {
        "Color": [
            "Languid Lavender"
        ],
        "Hexadecimal": "#D6CADD"
    },
    {
        "Color": [
            "Lapis Lazuli"
        ],
        "Hexadecimal": "#26619C"
    },
    {
        "Color": [
            "Las Palmas"
        ],
        "Hexadecimal": "#C6E610"
    },
    {
        "Color": [
            "Laser"
        ],
        "Hexadecimal": "#C8B568"
    },
    {
        "Color": [
            "Laser Lemon",
            "Unmellow Yellow"
        ],
        "Hexadecimal": "#FFFF66"
    },
    {
        "Color": [
            "Laurel"
        ],
        "Hexadecimal": "#749378"
    },
    {
        "Color": [
            "Laurel Green"
        ],
        "Hexadecimal": "#A9BA9D"
    },
    {
        "Color": [
            "Lava"
        ],
        "Hexadecimal": "#CF1020"
    },
    {
        "Color": [
            "Lavender (Floral)",
            "Lavender"
        ],
        "Hexadecimal": "#B57EDC"
    },
    {
        "Color": [
            "Lavender (Web)"
        ],
        "Hexadecimal": "#E6E6FA"
    },
    {
        "Color": [
            "Lavender Blue",
            "Periwinkle"
        ],
        "Hexadecimal": "#CCCCFF"
    },
    {
        "Color": [
            "Lavender Blush"
        ],
        "Hexadecimal": "#FFF0F5"
    },
    {
        "Color": [
            "Lavender Gray"
        ],
        "Hexadecimal": "#BDBBD7"
    },
    {
        "Color": [
            "Lavender Gray 2"
        ],
        "Hexadecimal": "#C4C3D0"
    },
    {
        "Color": [
            "Lavender Magenta"
        ],
        "Hexadecimal": "#EE82EE"
    },
    {
        "Color": [
            "Lavender Pink"
        ],
        "Hexadecimal": "#FBAED2"
    },
    {
        "Color": [
            "Lavender Purple"
        ],
        "Hexadecimal": "#967BB6"
    },
    {
        "Color": [
            "Lavender Rose"
        ],
        "Hexadecimal": "#FBA0E3"
    },
    {
        "Color": [
            "Lawn Green"
        ],
        "Hexadecimal": "#7CFC00"
    },
    {
        "Color": [
            "Leather"
        ],
        "Hexadecimal": "#967059"
    },
    {
        "Color": [
            "Lemon"
        ],
        "Hexadecimal": "#FDE910"
    },
    {
        "Color": [
            "Lemon Chiffon"
        ],
        "Hexadecimal": "#FFFACD"
    },
    {
        "Color": [
            "Lemon Curry"
        ],
        "Hexadecimal": "#CCA01D"
    },
    {
        "Color": [
            "Lemon Ginger"
        ],
        "Hexadecimal": "#AC9E22"
    },
    {
        "Color": [
            "Lemon Glacier"
        ],
        "Hexadecimal": "#FDFF00"
    },
    {
        "Color": [
            "Lemon Grass"
        ],
        "Hexadecimal": "#9B9E8F"
    },
    {
        "Color": [
            "Lemon Meringue"
        ],
        "Hexadecimal": "#F6EABE"
    },
    {
        "Color": [
            "Lemon Yellow"
        ],
        "Hexadecimal": "#FFF44F"
    },
    {
        "Color": [
            "Lemon Yellow (Crayola)"
        ],
        "Hexadecimal": "#FFFF9F"
    },
    {
        "Color": [
            "Liberty"
        ],
        "Hexadecimal": "#545AA7"
    },
    {
        "Color": [
            "Light Apricot"
        ],
        "Hexadecimal": "#FDD5B1"
    },
    {
        "Color": [
            "Light Blue"
        ],
        "Hexadecimal": "#ADD8E6"
    },
    {
        "Color": [
            "Light Coral"
        ],
        "Hexadecimal": "#F08080"
    },
    {
        "Color": [
            "Light Cornflower Blue",
            "Cornflower"
        ],
        "Hexadecimal": "#93CCEA"
    },
    {
        "Color": [
            "Light Cyan"
        ],
        "Hexadecimal": "#E0FFFF"
    },
    {
        "Color": [
            "Light French Beige"
        ],
        "Hexadecimal": "#C8AD7F"
    },
    {
        "Color": [
            "Light Goldenrod Yellow"
        ],
        "Hexadecimal": "#FAFAD2"
    },
    {
        "Color": [
            "Light Gray"
        ],
        "Hexadecimal": "#D3D3D3"
    },
    {
        "Color": [
            "Light Green"
        ],
        "Hexadecimal": "#90EE90"
    },
    {
        "Color": [
            "Light Orange"
        ],
        "Hexadecimal": "#FED8B1"
    },
    {
        "Color": [
            "Light Periwinkle"
        ],
        "Hexadecimal": "#C5CBE1"
    },
    {
        "Color": [
            "Light Pink"
        ],
        "Hexadecimal": "#FFB6C1"
    },
    {
        "Color": [
            "Light Salmon"
        ],
        "Hexadecimal": "#FFA07A"
    },
    {
        "Color": [
            "Light Sea Green"
        ],
        "Hexadecimal": "#20B2AA"
    },
    {
        "Color": [
            "Light Sky Blue"
        ],
        "Hexadecimal": "#87CEFA"
    },
    {
        "Color": [
            "Light Slate Gray"
        ],
        "Hexadecimal": "#778899"
    },
    {
        "Color": [
            "Light Steel Blue"
        ],
        "Hexadecimal": "#B0C4DE"
    },
    {
        "Color": [
            "Light Wisteria"
        ],
        "Hexadecimal": "#C9A0DC"
    },
    {
        "Color": [
            "Light Yellow"
        ],
        "Hexadecimal": "#FFFFE0"
    },
    {
        "Color": [
            "Lightning Yellow"
        ],
        "Hexadecimal": "#FCC01E"
    },
    {
        "Color": [
            "Lilac"
        ],
        "Hexadecimal": "#C8A2C8"
    },
    {
        "Color": [
            "Lilac Bush"
        ],
        "Hexadecimal": "#9874D3"
    },
    {
        "Color": [
            "Lilac Luster"
        ],
        "Hexadecimal": "#AE98AA"
    },
    {
        "Color": [
            "Lily"
        ],
        "Hexadecimal": "#C8AABF"
    },
    {
        "Color": [
            "Lily White"
        ],
        "Hexadecimal": "#E7F8FF"
    },
    {
        "Color": [
            "Lima"
        ],
        "Hexadecimal": "#76BD17"
    },
    {
        "Color": [
            "Lime Green"
        ],
        "Hexadecimal": "#32CD32"
    },
    {
        "Color": [
            "Limeade"
        ],
        "Hexadecimal": "#6F9D02"
    },
    {
        "Color": [
            "Limed Ash"
        ],
        "Hexadecimal": "#747D63"
    },
    {
        "Color": [
            "Limed Oak"
        ],
        "Hexadecimal": "#AC8A56"
    },
    {
        "Color": [
            "Limed Spruce"
        ],
        "Hexadecimal": "#394851"
    },
    {
        "Color": [
            "Lincoln Green"
        ],
        "Hexadecimal": "#195905"
    },
    {
        "Color": [
            "Linen"
        ],
        "Hexadecimal": "#FAF0E6"
    },
    {
        "Color": [
            "Link Water"
        ],
        "Hexadecimal": "#D9E4F5"
    },
    {
        "Color": [
            "Lipstick"
        ],
        "Hexadecimal": "#AB0563"
    },
    {
        "Color": [
            "Lisbon Brown"
        ],
        "Hexadecimal": "#423921"
    },
    {
        "Color": [
            "Little Boy Blue"
        ],
        "Hexadecimal": "#6CA0DC"
    },
    {
        "Color": [
            "Liver"
        ],
        "Hexadecimal": "#674C47"
    },
    {
        "Color": [
            "Liver (Dogs)"
        ],
        "Hexadecimal": "#B86D29"
    },
    {
        "Color": [
            "Liver (Organ)"
        ],
        "Hexadecimal": "#6C2E1F"
    },
    {
        "Color": [
            "Liver Chestnut"
        ],
        "Hexadecimal": "#987456"
    },
    {
        "Color": [
            "Livid Brown"
        ],
        "Hexadecimal": "#4D282E"
    },
    {
        "Color": [
            "Loafer"
        ],
        "Hexadecimal": "#EEF4DE"
    },
    {
        "Color": [
            "Loblolly"
        ],
        "Hexadecimal": "#BDC9CE"
    },
    {
        "Color": [
            "Lochinvar"
        ],
        "Hexadecimal": "#2C8C84"
    },
    {
        "Color": [
            "Lochmara"
        ],
        "Hexadecimal": "#007EC7"
    },
    {
        "Color": [
            "Locust"
        ],
        "Hexadecimal": "#A8AF8E"
    },
    {
        "Color": [
            "Log Cabin"
        ],
        "Hexadecimal": "#242A1D"
    },
    {
        "Color": [
            "Logan"
        ],
        "Hexadecimal": "#AAA9CD"
    },
    {
        "Color": [
            "Lola"
        ],
        "Hexadecimal": "#DFCFDB"
    },
    {
        "Color": [
            "London Hue"
        ],
        "Hexadecimal": "#BEA6C3"
    },
    {
        "Color": [
            "Lonestar"
        ],
        "Hexadecimal": "#6D0101"
    },
    {
        "Color": [
            "Lotus"
        ],
        "Hexadecimal": "#863C3C"
    },
    {
        "Color": [
            "Loulou"
        ],
        "Hexadecimal": "#460B41"
    },
    {
        "Color": [
            "Lucky"
        ],
        "Hexadecimal": "#AF9F1C"
    },
    {
        "Color": [
            "Lucky Point"
        ],
        "Hexadecimal": "#1A1A68"
    },
    {
        "Color": [
            "Lunar Green"
        ],
        "Hexadecimal": "#3C493A"
    },
    {
        "Color": [
            "Luxor Gold"
        ],
        "Hexadecimal": "#A7882C"
    },
    {
        "Color": [
            "Lynch"
        ],
        "Hexadecimal": "#697E9A"
    },
    {
        "Color": [
            "Mabel"
        ],
        "Hexadecimal": "#D9F7FF"
    },
    {
        "Color": [
            "Macaroni And Cheese"
        ],
        "Hexadecimal": "#FFB97B"
    },
    {
        "Color": [
            "Macaroni And Cheese 2"
        ],
        "Hexadecimal": "#FFBD88"
    },
    {
        "Color": [
            "Madang"
        ],
        "Hexadecimal": "#B7F0BE"
    },
    {
        "Color": [
            "Madder Lake"
        ],
        "Hexadecimal": "#CC3336"
    },
    {
        "Color": [
            "Madison"
        ],
        "Hexadecimal": "#09255D"
    },
    {
        "Color": [
            "Madras"
        ],
        "Hexadecimal": "#3F3002"
    },
    {
        "Color": [
            "Magenta (Crayola)"
        ],
        "Hexadecimal": "#F653A6"
    },
    {
        "Color": [
            "Magenta (Dye)"
        ],
        "Hexadecimal": "#CA1F7B"
    },
    {
        "Color": [
            "Magenta (PANTONE)"
        ],
        "Hexadecimal": "#D0417E"
    },
    {
        "Color": [
            "Magenta (Process)"
        ],
        "Hexadecimal": "#FF0090"
    },
    {
        "Color": [
            "Magenta Haze"
        ],
        "Hexadecimal": "#9F4576"
    },
    {
        "Color": [
            "Magic Mint"
        ],
        "Hexadecimal": "#AAF0D1"
    },
    {
        "Color": [
            "Magnolia"
        ],
        "Hexadecimal": "#F8F4FF"
    },
    {
        "Color": [
            "Magnolia 2"
        ],
        "Hexadecimal": "#F2E8D7"
    },
    {
        "Color": [
            "Mahogany"
        ],
        "Hexadecimal": "#C04000"
    },
    {
        "Color": [
            "Mahogany 2"
        ],
        "Hexadecimal": "#4E0606"
    },
    {
        "Color": [
            "Mai Tai"
        ],
        "Hexadecimal": "#B06608"
    },
    {
        "Color": [
            "Maize"
        ],
        "Hexadecimal": "#F5D5A0"
    },
    {
        "Color": [
            "Maize (Crayola)"
        ],
        "Hexadecimal": "#F2C649"
    },
    {
        "Color": [
            "Majorelle Blue"
        ],
        "Hexadecimal": "#6050DC"
    },
    {
        "Color": [
            "Makara"
        ],
        "Hexadecimal": "#897D6D"
    },
    {
        "Color": [
            "Mako"
        ],
        "Hexadecimal": "#444954"
    },
    {
        "Color": [
            "Malachite"
        ],
        "Hexadecimal": "#0BDA51"
    },
    {
        "Color": [
            "Malibu"
        ],
        "Hexadecimal": "#7DC8F7"
    },
    {
        "Color": [
            "Mallard"
        ],
        "Hexadecimal": "#233418"
    },
    {
        "Color": [
            "Malta"
        ],
        "Hexadecimal": "#BDB2A1"
    },
    {
        "Color": [
            "Mamba"
        ],
        "Hexadecimal": "#8E8190"
    },
    {
        "Color": [
            "Manatee"
        ],
        "Hexadecimal": "#979AAA"
    },
    {
        "Color": [
            "Manatee 2"
        ],
        "Hexadecimal": "#8D90A1"
    },
    {
        "Color": [
            "Mandalay"
        ],
        "Hexadecimal": "#AD781B"
    },
    {
        "Color": [
            "Mandarin"
        ],
        "Hexadecimal": "#F37A48"
    },
    {
        "Color": [
            "Mandy"
        ],
        "Hexadecimal": "#E25465"
    },
    {
        "Color": [
            "Mandys Pink"
        ],
        "Hexadecimal": "#F2C3B2"
    },
    {
        "Color": [
            "Mango"
        ],
        "Hexadecimal": "#FDBE02"
    },
    {
        "Color": [
            "Mango Tango"
        ],
        "Hexadecimal": "#FF8243"
    },
    {
        "Color": [
            "Mango Tango 2"
        ],
        "Hexadecimal": "#E77200"
    },
    {
        "Color": [
            "Manhattan"
        ],
        "Hexadecimal": "#F5C999"
    },
    {
        "Color": [
            "Mantis"
        ],
        "Hexadecimal": "#74C365"
    },
    {
        "Color": [
            "Mantle"
        ],
        "Hexadecimal": "#8B9C90"
    },
    {
        "Color": [
            "Manz"
        ],
        "Hexadecimal": "#EEEF78"
    },
    {
        "Color": [
            "Mardi Gras"
        ],
        "Hexadecimal": "#880085"
    },
    {
        "Color": [
            "Mardi Gras 2"
        ],
        "Hexadecimal": "#350036"
    },
    {
        "Color": [
            "Marigold"
        ],
        "Hexadecimal": "#EAA221"
    },
    {
        "Color": [
            "Marigold 2"
        ],
        "Hexadecimal": "#B98D28"
    },
    {
        "Color": [
            "Marigold Yellow"
        ],
        "Hexadecimal": "#FBE870"
    },
    {
        "Color": [
            "Mariner"
        ],
        "Hexadecimal": "#286ACD"
    },
    {
        "Color": [
            "Maroon (Web)",
            "Maroon"
        ],
        "Hexadecimal": "#800000"
    },
    {
        "Color": [
            "Maroon (X11)"
        ],
        "Hexadecimal": "#B03060"
    },
    {
        "Color": [
            "Maroon Oak"
        ],
        "Hexadecimal": "#520C17"
    },
    {
        "Color": [
            "Marshland"
        ],
        "Hexadecimal": "#0B0F08"
    },
    {
        "Color": [
            "Martini"
        ],
        "Hexadecimal": "#AFA09E"
    },
    {
        "Color": [
            "Martinique"
        ],
        "Hexadecimal": "#363050"
    },
    {
        "Color": [
            "Marzipan"
        ],
        "Hexadecimal": "#F8DB9D"
    },
    {
        "Color": [
            "Masala"
        ],
        "Hexadecimal": "#403B38"
    },
    {
        "Color": [
            "Matisse"
        ],
        "Hexadecimal": "#1B659D"
    },
    {
        "Color": [
            "Matrix"
        ],
        "Hexadecimal": "#B05D54"
    },
    {
        "Color": [
            "Matterhorn"
        ],
        "Hexadecimal": "#4E3B41"
    },
    {
        "Color": [
            "Mauve"
        ],
        "Hexadecimal": "#E0B0FF"
    },
    {
        "Color": [
            "Mauve Taupe",
            "Raspberry Glace"
        ],
        "Hexadecimal": "#915F6D"
    },
    {
        "Color": [
            "Mauvelous"
        ],
        "Hexadecimal": "#EF98AA"
    },
    {
        "Color": [
            "Mauvelous 2"
        ],
        "Hexadecimal": "#F091A9"
    },
    {
        "Color": [
            "Maverick"
        ],
        "Hexadecimal": "#D8C2D5"
    },
    {
        "Color": [
            "Maximum Blue"
        ],
        "Hexadecimal": "#47ABCC"
    },
    {
        "Color": [
            "Maximum Blue Green"
        ],
        "Hexadecimal": "#30BFBF"
    },
    {
        "Color": [
            "Maximum Blue Purple"
        ],
        "Hexadecimal": "#ACACE6"
    },
    {
        "Color": [
            "Maximum Green"
        ],
        "Hexadecimal": "#5E8C31"
    },
    {
        "Color": [
            "Maximum Green Yellow"
        ],
        "Hexadecimal": "#D9E650"
    },
    {
        "Color": [
            "Maximum Purple"
        ],
        "Hexadecimal": "#733380"
    },
    {
        "Color": [
            "Maximum Red"
        ],
        "Hexadecimal": "#D92121"
    },
    {
        "Color": [
            "Maximum Red Purple"
        ],
        "Hexadecimal": "#A63A79"
    },
    {
        "Color": [
            "Maximum Yellow"
        ],
        "Hexadecimal": "#FAFA37"
    },
    {
        "Color": [
            "Maximum Yellow Red"
        ],
        "Hexadecimal": "#F2BA49"
    },
    {
        "Color": [
            "May Green"
        ],
        "Hexadecimal": "#4C9141"
    },
    {
        "Color": [
            "Maya Blue"
        ],
        "Hexadecimal": "#73C2FB"
    },
    {
        "Color": [
            "Medium Aquamarine"
        ],
        "Hexadecimal": "#66DDAA"
    },
    {
        "Color": [
            "Medium Blue"
        ],
        "Hexadecimal": "#0000CD"
    },
    {
        "Color": [
            "Medium Candy Apple Red"
        ],
        "Hexadecimal": "#E2062C"
    },
    {
        "Color": [
            "Medium Carmine"
        ],
        "Hexadecimal": "#AF4035"
    },
    {
        "Color": [
            "Medium Champagne"
        ],
        "Hexadecimal": "#F3E5AB"
    },
    {
        "Color": [
            "Medium Orchid"
        ],
        "Hexadecimal": "#BA55D3"
    },
    {
        "Color": [
            "Medium Purple"
        ],
        "Hexadecimal": "#9370DB"
    },
    {
        "Color": [
            "Medium Red Violet"
        ],
        "Hexadecimal": "#BB3385"
    },
    {
        "Color": [
            "Medium Sea Green"
        ],
        "Hexadecimal": "#3CB371"
    },
    {
        "Color": [
            "Medium Slate Blue"
        ],
        "Hexadecimal": "#7B68EE"
    },
    {
        "Color": [
            "Medium Spring Green"
        ],
        "Hexadecimal": "#00FA9A"
    },
    {
        "Color": [
            "Medium Turquoise"
        ],
        "Hexadecimal": "#48D1CC"
    },
    {
        "Color": [
            "Medium Violet-Red",
            "Red-Violet",
            "Red Violet"
        ],
        "Hexadecimal": "#C71585"
    },
    {
        "Color": [
            "Melanie"
        ],
        "Hexadecimal": "#E4C2D5"
    },
    {
        "Color": [
            "Melanzane"
        ],
        "Hexadecimal": "#300529"
    },
    {
        "Color": [
            "Mellow Apricot"
        ],
        "Hexadecimal": "#F8B878"
    },
    {
        "Color": [
            "Melon"
        ],
        "Hexadecimal": "#FEBAAD"
    },
    {
        "Color": [
            "Melrose"
        ],
        "Hexadecimal": "#C7C1FF"
    },
    {
        "Color": [
            "Mercury"
        ],
        "Hexadecimal": "#E5E5E5"
    },
    {
        "Color": [
            "Merino"
        ],
        "Hexadecimal": "#F6F0E6"
    },
    {
        "Color": [
            "Merlin"
        ],
        "Hexadecimal": "#413C37"
    },
    {
        "Color": [
            "Merlot"
        ],
        "Hexadecimal": "#831923"
    },
    {
        "Color": [
            "Metallic Bronze"
        ],
        "Hexadecimal": "#49371B"
    },
    {
        "Color": [
            "Metallic Copper"
        ],
        "Hexadecimal": "#71291D"
    },
    {
        "Color": [
            "Metallic Gold"
        ],
        "Hexadecimal": "#D3AF37"
    },
    {
        "Color": [
            "Metallic Seaweed"
        ],
        "Hexadecimal": "#0A7E8C"
    },
    {
        "Color": [
            "Metallic Sunburst"
        ],
        "Hexadecimal": "#9C7C38"
    },
    {
        "Color": [
            "Meteor"
        ],
        "Hexadecimal": "#D07D12"
    },
    {
        "Color": [
            "Meteorite"
        ],
        "Hexadecimal": "#3C1F76"
    },
    {
        "Color": [
            "Mexican Pink"
        ],
        "Hexadecimal": "#E4007C"
    },
    {
        "Color": [
            "Mexican Red"
        ],
        "Hexadecimal": "#A72525"
    },
    {
        "Color": [
            "Mid Gray"
        ],
        "Hexadecimal": "#5F5F6E"
    },
    {
        "Color": [
            "Middle Blue"
        ],
        "Hexadecimal": "#7ED4E6"
    },
    {
        "Color": [
            "Middle Blue Green"
        ],
        "Hexadecimal": "#8DD9CC"
    },
    {
        "Color": [
            "Middle Blue Purple"
        ],
        "Hexadecimal": "#8B72BE"
    },
    {
        "Color": [
            "Middle Green"
        ],
        "Hexadecimal": "#4D8C57"
    },
    {
        "Color": [
            "Middle Green Yellow"
        ],
        "Hexadecimal": "#ACBF60"
    },
    {
        "Color": [
            "Middle Grey",
            "Natural Gray"
        ],
        "Hexadecimal": "#8B8680"
    },
    {
        "Color": [
            "Middle Purple"
        ],
        "Hexadecimal": "#D982B5"
    },
    {
        "Color": [
            "Middle Red"
        ],
        "Hexadecimal": "#E58E73"
    },
    {
        "Color": [
            "Middle Red Purple"
        ],
        "Hexadecimal": "#A55353"
    },
    {
        "Color": [
            "Middle Yellow"
        ],
        "Hexadecimal": "#FFEB00"
    },
    {
        "Color": [
            "Middle Yellow Red"
        ],
        "Hexadecimal": "#ECB176"
    },
    {
        "Color": [
            "Midnight"
        ],
        "Hexadecimal": "#011635"
    },
    {
        "Color": [
            "Midnight 2"
        ],
        "Hexadecimal": "#702670"
    },
    {
        "Color": [
            "Midnight Blue"
        ],
        "Hexadecimal": "#191970"
    },
    {
        "Color": [
            "Midnight Blue 2"
        ],
        "Hexadecimal": "#003366"
    },
    {
        "Color": [
            "Midnight Green (Eagle Green)"
        ],
        "Hexadecimal": "#004953"
    },
    {
        "Color": [
            "Midnight Moss"
        ],
        "Hexadecimal": "#041004"
    },
    {
        "Color": [
            "Mikado"
        ],
        "Hexadecimal": "#2D2510"
    },
    {
        "Color": [
            "Mikado Yellow"
        ],
        "Hexadecimal": "#FFC40C"
    },
    {
        "Color": [
            "Milan"
        ],
        "Hexadecimal": "#FAFFA4"
    },
    {
        "Color": [
            "Milano Red"
        ],
        "Hexadecimal": "#B81104"
    },
    {
        "Color": [
            "Milk Punch"
        ],
        "Hexadecimal": "#FFF6D4"
    },
    {
        "Color": [
            "Millbrook"
        ],
        "Hexadecimal": "#594433"
    },
    {
        "Color": [
            "Mimi Pink"
        ],
        "Hexadecimal": "#FFDAE9"
    },
    {
        "Color": [
            "Mimosa"
        ],
        "Hexadecimal": "#F8FDD3"
    },
    {
        "Color": [
            "Mindaro"
        ],
        "Hexadecimal": "#E3F988"
    },
    {
        "Color": [
            "Mine Shaft"
        ],
        "Hexadecimal": "#323232"
    },
    {
        "Color": [
            "Mineral Green"
        ],
        "Hexadecimal": "#3F5D53"
    },
    {
        "Color": [
            "Ming"
        ],
        "Hexadecimal": "#36747D"
    },
    {
        "Color": [
            "Minion Yellow"
        ],
        "Hexadecimal": "#F5E050"
    },
    {
        "Color": [
            "Minsk"
        ],
        "Hexadecimal": "#3F307F"
    },
    {
        "Color": [
            "Mint"
        ],
        "Hexadecimal": "#3EB489"
    },
    {
        "Color": [
            "Mint Cream"
        ],
        "Hexadecimal": "#F5FFFA"
    },
    {
        "Color": [
            "Mint Green"
        ],
        "Hexadecimal": "#98FF98"
    },
    {
        "Color": [
            "Mint Julep"
        ],
        "Hexadecimal": "#F1EEC1"
    },
    {
        "Color": [
            "Mint Tulip"
        ],
        "Hexadecimal": "#C4F4EB"
    },
    {
        "Color": [
            "Mirage"
        ],
        "Hexadecimal": "#161928"
    },
    {
        "Color": [
            "Mischka"
        ],
        "Hexadecimal": "#D1D2DD"
    },
    {
        "Color": [
            "Mist Gray"
        ],
        "Hexadecimal": "#C4C4BC"
    },
    {
        "Color": [
            "Misty Moss"
        ],
        "Hexadecimal": "#BBB477"
    },
    {
        "Color": [
            "Misty Rose"
        ],
        "Hexadecimal": "#FFE4E1"
    },
    {
        "Color": [
            "Mobster"
        ],
        "Hexadecimal": "#7F7589"
    },
    {
        "Color": [
            "Moccaccino"
        ],
        "Hexadecimal": "#6E1D14"
    },
    {
        "Color": [
            "Mocha"
        ],
        "Hexadecimal": "#782D19"
    },
    {
        "Color": [
            "Mojo"
        ],
        "Hexadecimal": "#C04737"
    },
    {
        "Color": [
            "Mona Lisa"
        ],
        "Hexadecimal": "#FFA194"
    },
    {
        "Color": [
            "Monarch"
        ],
        "Hexadecimal": "#8B0723"
    },
    {
        "Color": [
            "Mondo"
        ],
        "Hexadecimal": "#4A3C30"
    },
    {
        "Color": [
            "Mongoose"
        ],
        "Hexadecimal": "#B5A27F"
    },
    {
        "Color": [
            "Monsoon"
        ],
        "Hexadecimal": "#8A8389"
    },
    {
        "Color": [
            "Monte Carlo"
        ],
        "Hexadecimal": "#83D0C6"
    },
    {
        "Color": [
            "Monza"
        ],
        "Hexadecimal": "#C7031E"
    },
    {
        "Color": [
            "Moody Blue"
        ],
        "Hexadecimal": "#7F76D3"
    },
    {
        "Color": [
            "Moon Glow"
        ],
        "Hexadecimal": "#FCFEDA"
    },
    {
        "Color": [
            "Moon Mist"
        ],
        "Hexadecimal": "#DCDDCC"
    },
    {
        "Color": [
            "Moon Raker"
        ],
        "Hexadecimal": "#D6CEF6"
    },
    {
        "Color": [
            "Morning Blue"
        ],
        "Hexadecimal": "#8DA399"
    },
    {
        "Color": [
            "Morning Glory"
        ],
        "Hexadecimal": "#9EDEE0"
    },
    {
        "Color": [
            "Morocco Brown"
        ],
        "Hexadecimal": "#441D00"
    },
    {
        "Color": [
            "Mortar"
        ],
        "Hexadecimal": "#504351"
    },
    {
        "Color": [
            "Mosque"
        ],
        "Hexadecimal": "#036A6E"
    },
    {
        "Color": [
            "Moss Green"
        ],
        "Hexadecimal": "#ADDFAD"
    },
    {
        "Color": [
            "Moss Green",
            "Turtle Green"
        ],
        "Hexadecimal": "#8A9A5B"
    },
    {
        "Color": [
            "Mountain Meadow"
        ],
        "Hexadecimal": "#30BA8F"
    },
    {
        "Color": [
            "Mountain Meadow 2"
        ],
        "Hexadecimal": "#1AB385"
    },
    {
        "Color": [
            "Mountain Mist"
        ],
        "Hexadecimal": "#959396"
    },
    {
        "Color": [
            "Mountbatten Pink"
        ],
        "Hexadecimal": "#997A8D"
    },
    {
        "Color": [
            "Msu Green"
        ],
        "Hexadecimal": "#18453B"
    },
    {
        "Color": [
            "Muddy Waters"
        ],
        "Hexadecimal": "#B78E5C"
    },
    {
        "Color": [
            "Muesli"
        ],
        "Hexadecimal": "#AA8B5B"
    },
    {
        "Color": [
            "Mulberry"
        ],
        "Hexadecimal": "#C54B8C"
    },
    {
        "Color": [
            "Mulberry (Crayola)"
        ],
        "Hexadecimal": "#C8509B"
    },
    {
        "Color": [
            "Mulberry Wood"
        ],
        "Hexadecimal": "#5C0536"
    },
    {
        "Color": [
            "Mule Fawn"
        ],
        "Hexadecimal": "#8C472F"
    },
    {
        "Color": [
            "Mulled Wine"
        ],
        "Hexadecimal": "#4E4562"
    },
    {
        "Color": [
            "Mustard"
        ],
        "Hexadecimal": "#FFDB58"
    },
    {
        "Color": [
            "My Pink"
        ],
        "Hexadecimal": "#D69188"
    },
    {
        "Color": [
            "My Sin"
        ],
        "Hexadecimal": "#FFB31F"
    },
    {
        "Color": [
            "Myrtle Green"
        ],
        "Hexadecimal": "#317873"
    },
    {
        "Color": [
            "Mystic"
        ],
        "Hexadecimal": "#D65282"
    },
    {
        "Color": [
            "Mystic 2"
        ],
        "Hexadecimal": "#E2EBED"
    },
    {
        "Color": [
            "Mystic Maroon"
        ],
        "Hexadecimal": "#AD4379"
    },
    {
        "Color": [
            "Nadeshiko Pink"
        ],
        "Hexadecimal": "#F6ADC6"
    },
    {
        "Color": [
            "Nandor"
        ],
        "Hexadecimal": "#4B5D52"
    },
    {
        "Color": [
            "Napa"
        ],
        "Hexadecimal": "#ACA494"
    },
    {
        "Color": [
            "Naples Yellow",
            "Royal Yellow",
            "Stil De Grain Yellow"
        ],
        "Hexadecimal": "#FADA5E"
    },
    {
        "Color": [
            "Narvik"
        ],
        "Hexadecimal": "#EDF9F1"
    },
    {
        "Color": [
            "Navajo White"
        ],
        "Hexadecimal": "#FFDEAD"
    },
    {
        "Color": [
            "Navy Blue"
        ],
        "Hexadecimal": "#000080"
    },
    {
        "Color": [
            "Nebula"
        ],
        "Hexadecimal": "#CBDBD6"
    },
    {
        "Color": [
            "Negroni"
        ],
        "Hexadecimal": "#FFE2C5"
    },
    {
        "Color": [
            "Neon Blue"
        ],
        "Hexadecimal": "#4666FF"
    },
    {
        "Color": [
            "Neon Carrot"
        ],
        "Hexadecimal": "#FFA343"
    },
    {
        "Color": [
            "Neon Fuchsia"
        ],
        "Hexadecimal": "#FE4164"
    },
    {
        "Color": [
            "Neon Green"
        ],
        "Hexadecimal": "#39FF14"
    },
    {
        "Color": [
            "Nepal"
        ],
        "Hexadecimal": "#8EABC1"
    },
    {
        "Color": [
            "Neptune"
        ],
        "Hexadecimal": "#7CB7BB"
    },
    {
        "Color": [
            "Nero"
        ],
        "Hexadecimal": "#140600"
    },
    {
        "Color": [
            "Nevada"
        ],
        "Hexadecimal": "#646E75"
    },
    {
        "Color": [
            "New Orleans"
        ],
        "Hexadecimal": "#F3D69D"
    },
    {
        "Color": [
            "New York Pink"
        ],
        "Hexadecimal": "#D7837F"
    },
    {
        "Color": [
            "Niagara"
        ],
        "Hexadecimal": "#06A189"
    },
    {
        "Color": [
            "Nickel"
        ],
        "Hexadecimal": "#727472"
    },
    {
        "Color": [
            "Night Rider"
        ],
        "Hexadecimal": "#1F120F"
    },
    {
        "Color": [
            "Night Shadz"
        ],
        "Hexadecimal": "#AA375A"
    },
    {
        "Color": [
            "Nile Blue"
        ],
        "Hexadecimal": "#193751"
    },
    {
        "Color": [
            "Nobel"
        ],
        "Hexadecimal": "#B7B1B1"
    },
    {
        "Color": [
            "Nomad"
        ],
        "Hexadecimal": "#BAB1A2"
    },
    {
        "Color": [
            "Non-Photo Blue"
        ],
        "Hexadecimal": "#A4DDED"
    },
    {
        "Color": [
            "Norway"
        ],
        "Hexadecimal": "#A8BD9F"
    },
    {
        "Color": [
            "Nugget"
        ],
        "Hexadecimal": "#C59922"
    },
    {
        "Color": [
            "Nutmeg"
        ],
        "Hexadecimal": "#81422C"
    },
    {
        "Color": [
            "Nutmeg Wood Finish"
        ],
        "Hexadecimal": "#683600"
    },
    {
        "Color": [
            "Nyanza"
        ],
        "Hexadecimal": "#E9FFDB"
    },
    {
        "Color": [
            "Oasis"
        ],
        "Hexadecimal": "#FEEFCE"
    },
    {
        "Color": [
            "Observatory"
        ],
        "Hexadecimal": "#02866F"
    },
    {
        "Color": [
            "Ocean Blue"
        ],
        "Hexadecimal": "#4F42B5"
    },
    {
        "Color": [
            "Ocean Green"
        ],
        "Hexadecimal": "#41AA78"
    },
    {
        "Color": [
            "Ocean Green 2"
        ],
        "Hexadecimal": "#48BF91"
    },
    {
        "Color": [
            "Ochre"
        ],
        "Hexadecimal": "#CC7722"
    },
    {
        "Color": [
            "Off Green"
        ],
        "Hexadecimal": "#E6F8F3"
    },
    {
        "Color": [
            "Off Yellow"
        ],
        "Hexadecimal": "#FEF9E3"
    },
    {
        "Color": [
            "Oil"
        ],
        "Hexadecimal": "#281E15"
    },
    {
        "Color": [
            "Old Brick"
        ],
        "Hexadecimal": "#901E1E"
    },
    {
        "Color": [
            "Old Burgundy"
        ],
        "Hexadecimal": "#43302E"
    },
    {
        "Color": [
            "Old Copper"
        ],
        "Hexadecimal": "#724A2F"
    },
    {
        "Color": [
            "Old Gold"
        ],
        "Hexadecimal": "#CFB53B"
    },
    {
        "Color": [
            "Old Lace"
        ],
        "Hexadecimal": "#FDF5E6"
    },
    {
        "Color": [
            "Old Lavender"
        ],
        "Hexadecimal": "#796878"
    },
    {
        "Color": [
            "Old Mauve",
            "Wine Dregs"
        ],
        "Hexadecimal": "#673147"
    },
    {
        "Color": [
            "Old Rose"
        ],
        "Hexadecimal": "#C08081"
    },
    {
        "Color": [
            "Olive"
        ],
        "Hexadecimal": "#808000"
    },
    {
        "Color": [
            "Olive Drab (#3)",
            "Olive Drab"
        ],
        "Hexadecimal": "#6B8E23"
    },
    {
        "Color": [
            "Olive Drab #7"
        ],
        "Hexadecimal": "#3C341F"
    },
    {
        "Color": [
            "Olive Green"
        ],
        "Hexadecimal": "#B5B35C"
    },
    {
        "Color": [
            "Olive Haze"
        ],
        "Hexadecimal": "#8B8470"
    },
    {
        "Color": [
            "Olivetone"
        ],
        "Hexadecimal": "#716E10"
    },
    {
        "Color": [
            "Olivine"
        ],
        "Hexadecimal": "#9AB973"
    },
    {
        "Color": [
            "Onahau"
        ],
        "Hexadecimal": "#CDF4FF"
    },
    {
        "Color": [
            "Onion"
        ],
        "Hexadecimal": "#2F270E"
    },
    {
        "Color": [
            "Onyx"
        ],
        "Hexadecimal": "#353839"
    },
    {
        "Color": [
            "Opal"
        ],
        "Hexadecimal": "#A8C3BC"
    },
    {
        "Color": [
            "Opal 2"
        ],
        "Hexadecimal": "#A9C6C2"
    },
    {
        "Color": [
            "Opera Mauve"
        ],
        "Hexadecimal": "#B784A7"
    },
    {
        "Color": [
            "Opium"
        ],
        "Hexadecimal": "#8E6F70"
    },
    {
        "Color": [
            "Oracle"
        ],
        "Hexadecimal": "#377475"
    },
    {
        "Color": [
            "Orange (Crayola)"
        ],
        "Hexadecimal": "#FF7538"
    },
    {
        "Color": [
            "Orange (PANTONE)"
        ],
        "Hexadecimal": "#FF5800"
    },
    {
        "Color": [
            "Orange (Web)",
            "Web Orange"
        ],
        "Hexadecimal": "#FFA500"
    },
    {
        "Color": [
            "Orange",
            "Flush Orange"
        ],
        "Hexadecimal": "#FF7F00"
    },
    {
        "Color": [
            "Orange Peel"
        ],
        "Hexadecimal": "#FF9F00"
    },
    {
        "Color": [
            "Orange Peel 2"
        ],
        "Hexadecimal": "#FFA000"
    },
    {
        "Color": [
            "Orange Roughy"
        ],
        "Hexadecimal": "#C45719"
    },
    {
        "Color": [
            "Orange Soda"
        ],
        "Hexadecimal": "#FA5B3D"
    },
    {
        "Color": [
            "Orange White"
        ],
        "Hexadecimal": "#FEFCED"
    },
    {
        "Color": [
            "Orange-Red (Crayola)",
            "Red-Orange"
        ],
        "Hexadecimal": "#FF5349"
    },
    {
        "Color": [
            "Orange-Red",
            "Red-Orange (Crayola)",
            "Orange"
        ],
        "Hexadecimal": "#FF681F"
    },
    {
        "Color": [
            "Orange-Yellow"
        ],
        "Hexadecimal": "#F5BD1F"
    },
    {
        "Color": [
            "Orange-Yellow (Crayola)"
        ],
        "Hexadecimal": "#F8D568"
    },
    {
        "Color": [
            "Orchid"
        ],
        "Hexadecimal": "#DA70D6"
    },
    {
        "Color": [
            "Orchid (Crayola)",
            "Light Orchid"
        ],
        "Hexadecimal": "#E29CD2"
    },
    {
        "Color": [
            "Orchid Pink"
        ],
        "Hexadecimal": "#F2BDCD"
    },
    {
        "Color": [
            "Orchid White"
        ],
        "Hexadecimal": "#FFFDF3"
    },
    {
        "Color": [
            "Oregon"
        ],
        "Hexadecimal": "#9B4703"
    },
    {
        "Color": [
            "Orient"
        ],
        "Hexadecimal": "#015E85"
    },
    {
        "Color": [
            "Oriental Pink"
        ],
        "Hexadecimal": "#C69191"
    },
    {
        "Color": [
            "Orinoco"
        ],
        "Hexadecimal": "#F3FBD4"
    },
    {
        "Color": [
            "Oslo Gray"
        ],
        "Hexadecimal": "#878D91"
    },
    {
        "Color": [
            "Ottoman"
        ],
        "Hexadecimal": "#E9F8ED"
    },
    {
        "Color": [
            "Ou Crimson Red"
        ],
        "Hexadecimal": "#841617"
    },
    {
        "Color": [
            "Outer Space (Crayola)",
            "Outer Space"
        ],
        "Hexadecimal": "#2D383A"
    },
    {
        "Color": [
            "Outrageous Orange"
        ],
        "Hexadecimal": "#FF6037"
    },
    {
        "Color": [
            "Outrageous Orange 2"
        ],
        "Hexadecimal": "#FF6E4A"
    },
    {
        "Color": [
            "Oxblood"
        ],
        "Hexadecimal": "#4A0000"
    },
    {
        "Color": [
            "Oxford Blue"
        ],
        "Hexadecimal": "#002147"
    },
    {
        "Color": [
            "Oxford Blue 2"
        ],
        "Hexadecimal": "#384555"
    },
    {
        "Color": [
            "Oxley"
        ],
        "Hexadecimal": "#779E86"
    },
    {
        "Color": [
            "Oyster Bay"
        ],
        "Hexadecimal": "#DAFAFF"
    },
    {
        "Color": [
            "Oyster Pink"
        ],
        "Hexadecimal": "#E9CECD"
    },
    {
        "Color": [
            "Paarl"
        ],
        "Hexadecimal": "#A65529"
    },
    {
        "Color": [
            "Pablo"
        ],
        "Hexadecimal": "#776F61"
    },
    {
        "Color": [
            "Pacific Blue"
        ],
        "Hexadecimal": "#1CA9C9"
    },
    {
        "Color": [
            "Pacific Blue 2"
        ],
        "Hexadecimal": "#009DC4"
    },
    {
        "Color": [
            "Pacifika"
        ],
        "Hexadecimal": "#778120"
    },
    {
        "Color": [
            "Paco"
        ],
        "Hexadecimal": "#411F10"
    },
    {
        "Color": [
            "Padua"
        ],
        "Hexadecimal": "#ADE6C4"
    },
    {
        "Color": [
            "Pakistan Green"
        ],
        "Hexadecimal": "#006600"
    },
    {
        "Color": [
            "Palatinate Purple"
        ],
        "Hexadecimal": "#682860"
    },
    {
        "Color": [
            "Pale Canary"
        ],
        "Hexadecimal": "#FFFF99"
    },
    {
        "Color": [
            "Pale Cerulean"
        ],
        "Hexadecimal": "#9BC4E2"
    },
    {
        "Color": [
            "Pale Dogwood",
            "Rose Pompadour"
        ],
        "Hexadecimal": "#ED7A9B"
    },
    {
        "Color": [
            "Pale Leaf"
        ],
        "Hexadecimal": "#C0D3B9"
    },
    {
        "Color": [
            "Pale Oyster"
        ],
        "Hexadecimal": "#988D77"
    },
    {
        "Color": [
            "Pale Pink"
        ],
        "Hexadecimal": "#FADADD"
    },
    {
        "Color": [
            "Pale Prim"
        ],
        "Hexadecimal": "#FDFEB8"
    },
    {
        "Color": [
            "Pale Purple (PANTONE)"
        ],
        "Hexadecimal": "#FAE6FA"
    },
    {
        "Color": [
            "Pale Rose"
        ],
        "Hexadecimal": "#FFE1F2"
    },
    {
        "Color": [
            "Pale Silver",
            "Silver (Crayola)",
            "Silver Rust"
        ],
        "Hexadecimal": "#C9C0BB"
    },
    {
        "Color": [
            "Pale Sky"
        ],
        "Hexadecimal": "#6E7783"
    },
    {
        "Color": [
            "Pale Slate"
        ],
        "Hexadecimal": "#C3BFC1"
    },
    {
        "Color": [
            "Pale Spring Bud",
            "Spring Green (Crayola)",
            "Fall Green"
        ],
        "Hexadecimal": "#ECEBBD"
    },
    {
        "Color": [
            "Palm Green"
        ],
        "Hexadecimal": "#09230F"
    },
    {
        "Color": [
            "Palm Leaf"
        ],
        "Hexadecimal": "#19330E"
    },
    {
        "Color": [
            "Pampas"
        ],
        "Hexadecimal": "#F4F2EE"
    },
    {
        "Color": [
            "Panache"
        ],
        "Hexadecimal": "#EAF6EE"
    },
    {
        "Color": [
            "Pancho"
        ],
        "Hexadecimal": "#EDCDAB"
    },
    {
        "Color": [
            "Pansy Purple"
        ],
        "Hexadecimal": "#78184A"
    },
    {
        "Color": [
            "Paolo Veronese Green"
        ],
        "Hexadecimal": "#009B7D"
    },
    {
        "Color": [
            "Papaya Whip"
        ],
        "Hexadecimal": "#FFEFD5"
    },
    {
        "Color": [
            "Paprika"
        ],
        "Hexadecimal": "#8D0226"
    },
    {
        "Color": [
            "Paradise Pink"
        ],
        "Hexadecimal": "#E63E62"
    },
    {
        "Color": [
            "Paradiso"
        ],
        "Hexadecimal": "#317D82"
    },
    {
        "Color": [
            "Parchment"
        ],
        "Hexadecimal": "#F1E9D2"
    },
    {
        "Color": [
            "Paris Daisy"
        ],
        "Hexadecimal": "#FFF46E"
    },
    {
        "Color": [
            "Paris M"
        ],
        "Hexadecimal": "#26056A"
    },
    {
        "Color": [
            "Paris White"
        ],
        "Hexadecimal": "#CADCD4"
    },
    {
        "Color": [
            "Parsley"
        ],
        "Hexadecimal": "#134F19"
    },
    {
        "Color": [
            "Pastel Green"
        ],
        "Hexadecimal": "#77DD77"
    },
    {
        "Color": [
            "Pastel Pink"
        ],
        "Hexadecimal": "#FFD1DC"
    },
    {
        "Color": [
            "Pastel Pink 2"
        ],
        "Hexadecimal": "#DEA5A4"
    },
    {
        "Color": [
            "Patina"
        ],
        "Hexadecimal": "#639A8F"
    },
    {
        "Color": [
            "Patriarch",
            "Purple (Web)"
        ],
        "Hexadecimal": "#800080"
    },
    {
        "Color": [
            "Pattens Blue"
        ],
        "Hexadecimal": "#DEF5FF"
    },
    {
        "Color": [
            "Paua"
        ],
        "Hexadecimal": "#260368"
    },
    {
        "Color": [
            "Pavlova"
        ],
        "Hexadecimal": "#D7C498"
    },
    {
        "Color": [
            "Peach"
        ],
        "Hexadecimal": "#FFE5B4"
    },
    {
        "Color": [
            "Peach (Crayola)",
            "Flesh"
        ],
        "Hexadecimal": "#FFCBA4"
    },
    {
        "Color": [
            "Peach Cream"
        ],
        "Hexadecimal": "#FFF0DB"
    },
    {
        "Color": [
            "Peach Orange"
        ],
        "Hexadecimal": "#FFCC99"
    },
    {
        "Color": [
            "Peach Puff"
        ],
        "Hexadecimal": "#FFDAB9"
    },
    {
        "Color": [
            "Peach Schnapps"
        ],
        "Hexadecimal": "#FFDCD6"
    },
    {
        "Color": [
            "Peach Yellow"
        ],
        "Hexadecimal": "#FADFAD"
    },
    {
        "Color": [
            "Peanut"
        ],
        "Hexadecimal": "#782F16"
    },
    {
        "Color": [
            "Pear"
        ],
        "Hexadecimal": "#D1E231"
    },
    {
        "Color": [
            "Pearl Bush"
        ],
        "Hexadecimal": "#E8E0D5"
    },
    {
        "Color": [
            "Pearl Lusta"
        ],
        "Hexadecimal": "#FCF4DC"
    },
    {
        "Color": [
            "Pearly Purple"
        ],
        "Hexadecimal": "#B768A2"
    },
    {
        "Color": [
            "Peat"
        ],
        "Hexadecimal": "#716B56"
    },
    {
        "Color": [
            "Pelorous"
        ],
        "Hexadecimal": "#3EABBF"
    },
    {
        "Color": [
            "Peppermint"
        ],
        "Hexadecimal": "#E3F5E1"
    },
    {
        "Color": [
            "Perano"
        ],
        "Hexadecimal": "#A9BEF2"
    },
    {
        "Color": [
            "Perfume"
        ],
        "Hexadecimal": "#D0BEF8"
    },
    {
        "Color": [
            "Periglacial Blue"
        ],
        "Hexadecimal": "#E1E6D6"
    },
    {
        "Color": [
            "Periwinkle (Crayola)",
            "Periwinkle Gray"
        ],
        "Hexadecimal": "#C3CDE6"
    },
    {
        "Color": [
            "Permanent Geranium Lake"
        ],
        "Hexadecimal": "#E12C2C"
    },
    {
        "Color": [
            "Persian Blue"
        ],
        "Hexadecimal": "#1C39BB"
    },
    {
        "Color": [
            "Persian Green"
        ],
        "Hexadecimal": "#00A693"
    },
    {
        "Color": [
            "Persian Indigo"
        ],
        "Hexadecimal": "#32127A"
    },
    {
        "Color": [
            "Persian Orange"
        ],
        "Hexadecimal": "#D99058"
    },
    {
        "Color": [
            "Persian Pink"
        ],
        "Hexadecimal": "#F77FBE"
    },
    {
        "Color": [
            "Persian Plum",
            "Prune"
        ],
        "Hexadecimal": "#701C1C"
    },
    {
        "Color": [
            "Persian Red"
        ],
        "Hexadecimal": "#CC3333"
    },
    {
        "Color": [
            "Persian Rose"
        ],
        "Hexadecimal": "#FE28A2"
    },
    {
        "Color": [
            "Persimmon"
        ],
        "Hexadecimal": "#FF6B53"
    },
    {
        "Color": [
            "Persimmon 2"
        ],
        "Hexadecimal": "#EC5800"
    },
    {
        "Color": [
            "Peru Tan"
        ],
        "Hexadecimal": "#7F3A02"
    },
    {
        "Color": [
            "Pesto"
        ],
        "Hexadecimal": "#7C7631"
    },
    {
        "Color": [
            "Petite Orchid"
        ],
        "Hexadecimal": "#DB9690"
    },
    {
        "Color": [
            "Pewter"
        ],
        "Hexadecimal": "#96A8A1"
    },
    {
        "Color": [
            "Pewter Blue"
        ],
        "Hexadecimal": "#8BA8B7"
    },
    {
        "Color": [
            "Pharlap"
        ],
        "Hexadecimal": "#A3807B"
    },
    {
        "Color": [
            "Phlox",
            "Psychedelic Purple"
        ],
        "Hexadecimal": "#DF00FF"
    },
    {
        "Color": [
            "Phthalo Blue"
        ],
        "Hexadecimal": "#000F89"
    },
    {
        "Color": [
            "Phthalo Green"
        ],
        "Hexadecimal": "#123524"
    },
    {
        "Color": [
            "Picasso"
        ],
        "Hexadecimal": "#FFF39D"
    },
    {
        "Color": [
            "Pickled Bean"
        ],
        "Hexadecimal": "#6E4826"
    },
    {
        "Color": [
            "Pickled Bluewood"
        ],
        "Hexadecimal": "#314459"
    },
    {
        "Color": [
            "Picotee Blue"
        ],
        "Hexadecimal": "#2E2787"
    },
    {
        "Color": [
            "Picton Blue"
        ],
        "Hexadecimal": "#45B1E8"
    },
    {
        "Color": [
            "Pictorial Carmine"
        ],
        "Hexadecimal": "#C30B4E"
    },
    {
        "Color": [
            "Pig Pink"
        ],
        "Hexadecimal": "#FDD7E4"
    },
    {
        "Color": [
            "Pigeon Post"
        ],
        "Hexadecimal": "#AFBDD9"
    },
    {
        "Color": [
            "Piggy Pink"
        ],
        "Hexadecimal": "#FDDDE6"
    },
    {
        "Color": [
            "Pigment Indigo"
        ],
        "Hexadecimal": "#4B0082"
    },
    {
        "Color": [
            "Pine Cone"
        ],
        "Hexadecimal": "#6D5E54"
    },
    {
        "Color": [
            "Pine Glade"
        ],
        "Hexadecimal": "#C7CD90"
    },
    {
        "Color": [
            "Pine Green"
        ],
        "Hexadecimal": "#01796F"
    },
    {
        "Color": [
            "Pine Tree"
        ],
        "Hexadecimal": "#2A2F23"
    },
    {
        "Color": [
            "Pine Tree 2"
        ],
        "Hexadecimal": "#171F04"
    },
    {
        "Color": [
            "Pink"
        ],
        "Hexadecimal": "#FFC0CB"
    },
    {
        "Color": [
            "Pink (PANTONE)"
        ],
        "Hexadecimal": "#D74894"
    },
    {
        "Color": [
            "Pink Flamingo"
        ],
        "Hexadecimal": "#FF66FF"
    },
    {
        "Color": [
            "Pink Flamingo 2"
        ],
        "Hexadecimal": "#FC74FD"
    },
    {
        "Color": [
            "Pink Flare"
        ],
        "Hexadecimal": "#E1C0C8"
    },
    {
        "Color": [
            "Pink Lace"
        ],
        "Hexadecimal": "#FFDDF4"
    },
    {
        "Color": [
            "Pink Lady"
        ],
        "Hexadecimal": "#FFF1D8"
    },
    {
        "Color": [
            "Pink Lavender"
        ],
        "Hexadecimal": "#D8B2D1"
    },
    {
        "Color": [
            "Pink Sherbet"
        ],
        "Hexadecimal": "#F78FA7"
    },
    {
        "Color": [
            "Pink Swan"
        ],
        "Hexadecimal": "#BEB5B7"
    },
    {
        "Color": [
            "Piper"
        ],
        "Hexadecimal": "#C96323"
    },
    {
        "Color": [
            "Pipi"
        ],
        "Hexadecimal": "#FEF4CC"
    },
    {
        "Color": [
            "Pippin"
        ],
        "Hexadecimal": "#FFE1DF"
    },
    {
        "Color": [
            "Pirate Gold"
        ],
        "Hexadecimal": "#BA7F03"
    },
    {
        "Color": [
            "Pistachio"
        ],
        "Hexadecimal": "#9DC209"
    },
    {
        "Color": [
            "Pistachio 2"
        ],
        "Hexadecimal": "#93C572"
    },
    {
        "Color": [
            "Pixie Green"
        ],
        "Hexadecimal": "#C0D8B6"
    },
    {
        "Color": [
            "Pizazz"
        ],
        "Hexadecimal": "#FF9000"
    },
    {
        "Color": [
            "Pizza"
        ],
        "Hexadecimal": "#C99415"
    },
    {
        "Color": [
            "Plantation"
        ],
        "Hexadecimal": "#27504B"
    },
    {
        "Color": [
            "Platinum"
        ],
        "Hexadecimal": "#E5E4E2"
    },
    {
        "Color": [
            "Plum"
        ],
        "Hexadecimal": "#843179"
    },
    {
        "Color": [
            "Plum (Web)"
        ],
        "Hexadecimal": "#DDA0DD"
    },
    {
        "Color": [
            "Plum 2"
        ],
        "Hexadecimal": "#8E4585"
    },
    {
        "Color": [
            "Plump Purple"
        ],
        "Hexadecimal": "#5946B2"
    },
    {
        "Color": [
            "Pohutukawa"
        ],
        "Hexadecimal": "#8F021C"
    },
    {
        "Color": [
            "Polar"
        ],
        "Hexadecimal": "#E5F9F6"
    },
    {
        "Color": [
            "Polished Pine"
        ],
        "Hexadecimal": "#5DA493"
    },
    {
        "Color": [
            "Polo Blue"
        ],
        "Hexadecimal": "#8DA8CC"
    },
    {
        "Color": [
            "Pomegranate"
        ],
        "Hexadecimal": "#F34723"
    },
    {
        "Color": [
            "Pomp And Power"
        ],
        "Hexadecimal": "#86608E"
    },
    {
        "Color": [
            "Pompadour"
        ],
        "Hexadecimal": "#660045"
    },
    {
        "Color": [
            "Popstar"
        ],
        "Hexadecimal": "#BE4F62"
    },
    {
        "Color": [
            "Porcelain"
        ],
        "Hexadecimal": "#EFF2F3"
    },
    {
        "Color": [
            "Porsche"
        ],
        "Hexadecimal": "#EAAE69"
    },
    {
        "Color": [
            "Port Gore"
        ],
        "Hexadecimal": "#251F4F"
    },
    {
        "Color": [
            "Portafino"
        ],
        "Hexadecimal": "#FFFFB4"
    },
    {
        "Color": [
            "Portage"
        ],
        "Hexadecimal": "#8B9FEE"
    },
    {
        "Color": [
            "Portica"
        ],
        "Hexadecimal": "#F9E663"
    },
    {
        "Color": [
            "Portland Orange"
        ],
        "Hexadecimal": "#FF5A36"
    },
    {
        "Color": [
            "Pot Pourri"
        ],
        "Hexadecimal": "#F5E7E2"
    },
    {
        "Color": [
            "Potters Clay"
        ],
        "Hexadecimal": "#8C5738"
    },
    {
        "Color": [
            "Powder Ash"
        ],
        "Hexadecimal": "#BCC9C2"
    },
    {
        "Color": [
            "Powder Blue"
        ],
        "Hexadecimal": "#B0E0E6"
    },
    {
        "Color": [
            "Prairie Sand"
        ],
        "Hexadecimal": "#9A3820"
    },
    {
        "Color": [
            "Prelude"
        ],
        "Hexadecimal": "#D0C0E5"
    },
    {
        "Color": [
            "Prim"
        ],
        "Hexadecimal": "#F0E2EC"
    },
    {
        "Color": [
            "Primrose"
        ],
        "Hexadecimal": "#EDEA99"
    },
    {
        "Color": [
            "Princeton Orange"
        ],
        "Hexadecimal": "#F58025"
    },
    {
        "Color": [
            "Provincial Pink"
        ],
        "Hexadecimal": "#FEF5F1"
    },
    {
        "Color": [
            "Prussian Blue"
        ],
        "Hexadecimal": "#003153"
    },
    {
        "Color": [
            "Puce"
        ],
        "Hexadecimal": "#CC8899"
    },
    {
        "Color": [
            "Pueblo"
        ],
        "Hexadecimal": "#7D2C14"
    },
    {
        "Color": [
            "Puerto Rico"
        ],
        "Hexadecimal": "#3FC1AA"
    },
    {
        "Color": [
            "Pullman Brown (Ups Brown)"
        ],
        "Hexadecimal": "#644117"
    },
    {
        "Color": [
            "Pumice"
        ],
        "Hexadecimal": "#C2CAC4"
    },
    {
        "Color": [
            "Pumpkin"
        ],
        "Hexadecimal": "#FF7518"
    },
    {
        "Color": [
            "Pumpkin Skin"
        ],
        "Hexadecimal": "#B1610B"
    },
    {
        "Color": [
            "Punch"
        ],
        "Hexadecimal": "#DC4333"
    },
    {
        "Color": [
            "Punga"
        ],
        "Hexadecimal": "#4D3D14"
    },
    {
        "Color": [
            "Purple"
        ],
        "Hexadecimal": "#6A0DAD"
    },
    {
        "Color": [
            "Purple (MUNSELL)"
        ],
        "Hexadecimal": "#9F00C5"
    },
    {
        "Color": [
            "Purple (X11)",
            "Veronica"
        ],
        "Hexadecimal": "#A020F0"
    },
    {
        "Color": [
            "Purple 2"
        ],
        "Hexadecimal": "#660099"
    },
    {
        "Color": [
            "Purple Heart"
        ],
        "Hexadecimal": "#652DC1"
    },
    {
        "Color": [
            "Purple Mountain Majesty",
            "Purple Mountain's Majesty"
        ],
        "Hexadecimal": "#9678B6"
    },
    {
        "Color": [
            "Purple Navy"
        ],
        "Hexadecimal": "#4E5180"
    },
    {
        "Color": [
            "Purple Pizzazz"
        ],
        "Hexadecimal": "#FE4EDA"
    },
    {
        "Color": [
            "Purple Pizzazz 2"
        ],
        "Hexadecimal": "#FF00CC"
    },
    {
        "Color": [
            "Purple Plum"
        ],
        "Hexadecimal": "#9C51B6"
    },
    {
        "Color": [
            "Purpureus"
        ],
        "Hexadecimal": "#9A4EAE"
    },
    {
        "Color": [
            "Putty"
        ],
        "Hexadecimal": "#E7CD8C"
    },
    {
        "Color": [
            "Quarter Pearl Lusta"
        ],
        "Hexadecimal": "#FFFDF4"
    },
    {
        "Color": [
            "Quarter Spanish White"
        ],
        "Hexadecimal": "#F7F2E1"
    },
    {
        "Color": [
            "Queen Blue"
        ],
        "Hexadecimal": "#436B95"
    },
    {
        "Color": [
            "Queen Pink"
        ],
        "Hexadecimal": "#E8CCD7"
    },
    {
        "Color": [
            "Quick Silver"
        ],
        "Hexadecimal": "#A6A6A6"
    },
    {
        "Color": [
            "Quicksand"
        ],
        "Hexadecimal": "#BD978E"
    },
    {
        "Color": [
            "Quill Gray"
        ],
        "Hexadecimal": "#D6D6D1"
    },
    {
        "Color": [
            "Quinacridone Magenta"
        ],
        "Hexadecimal": "#8E3A59"
    },
    {
        "Color": [
            "Quincy"
        ],
        "Hexadecimal": "#623F2D"
    },
    {
        "Color": [
            "Racing Green"
        ],
        "Hexadecimal": "#0C1911"
    },
    {
        "Color": [
            "Radical Red"
        ],
        "Hexadecimal": "#FF355E"
    },
    {
        "Color": [
            "Raffia"
        ],
        "Hexadecimal": "#EADAB8"
    },
    {
        "Color": [
            "Rainee"
        ],
        "Hexadecimal": "#B9C8AC"
    },
    {
        "Color": [
            "Raisin Black"
        ],
        "Hexadecimal": "#242124"
    },
    {
        "Color": [
            "Rajah"
        ],
        "Hexadecimal": "#FBAB60"
    },
    {
        "Color": [
            "Rajah 2"
        ],
        "Hexadecimal": "#F7B668"
    },
    {
        "Color": [
            "Rangitoto"
        ],
        "Hexadecimal": "#2E3222"
    },
    {
        "Color": [
            "Rangoon Green"
        ],
        "Hexadecimal": "#1C1E13"
    },
    {
        "Color": [
            "Raspberry"
        ],
        "Hexadecimal": "#E30B5D"
    },
    {
        "Color": [
            "Raven"
        ],
        "Hexadecimal": "#727B89"
    },
    {
        "Color": [
            "Raw Sienna"
        ],
        "Hexadecimal": "#D27D46"
    },
    {
        "Color": [
            "Raw Sienna 2"
        ],
        "Hexadecimal": "#D68A59"
    },
    {
        "Color": [
            "Raw Umber"
        ],
        "Hexadecimal": "#734A12"
    },
    {
        "Color": [
            "Raw Umber 2"
        ],
        "Hexadecimal": "#826644"
    },
    {
        "Color": [
            "Razzle Dazzle Rose"
        ],
        "Hexadecimal": "#FF33CC"
    },
    {
        "Color": [
            "Razzmatazz"
        ],
        "Hexadecimal": "#E30B5C"
    },
    {
        "Color": [
            "Razzmatazz 2"
        ],
        "Hexadecimal": "#E3256B"
    },
    {
        "Color": [
            "Razzmic Berry"
        ],
        "Hexadecimal": "#8D4E85"
    },
    {
        "Color": [
            "Rebecca Purple"
        ],
        "Hexadecimal": "#663399"
    },
    {
        "Color": [
            "Rebel"
        ],
        "Hexadecimal": "#3C1206"
    },
    {
        "Color": [
            "Red"
        ],
        "Hexadecimal": "#FF0000"
    },
    {
        "Color": [
            "Red (Crayola)"
        ],
        "Hexadecimal": "#EE204D"
    },
    {
        "Color": [
            "Red (MUNSELL)"
        ],
        "Hexadecimal": "#F2003C"
    },
    {
        "Color": [
            "Red (NCS)"
        ],
        "Hexadecimal": "#C40233"
    },
    {
        "Color": [
            "Red (Pigment)"
        ],
        "Hexadecimal": "#ED1C24"
    },
    {
        "Color": [
            "Red (RYB)"
        ],
        "Hexadecimal": "#FE2712"
    },
    {
        "Color": [
            "Red Beech"
        ],
        "Hexadecimal": "#7B3801"
    },
    {
        "Color": [
            "Red Berry"
        ],
        "Hexadecimal": "#8E0000"
    },
    {
        "Color": [
            "Red Damask"
        ],
        "Hexadecimal": "#DA6A41"
    },
    {
        "Color": [
            "Red Devil"
        ],
        "Hexadecimal": "#860111"
    },
    {
        "Color": [
            "Red Orange"
        ],
        "Hexadecimal": "#FF3F34"
    },
    {
        "Color": [
            "Red Oxide"
        ],
        "Hexadecimal": "#6E0902"
    },
    {
        "Color": [
            "Red Ribbon"
        ],
        "Hexadecimal": "#ED0A3F"
    },
    {
        "Color": [
            "Red Robin"
        ],
        "Hexadecimal": "#80341F"
    },
    {
        "Color": [
            "Red Salsa"
        ],
        "Hexadecimal": "#FD3A4A"
    },
    {
        "Color": [
            "Red Stage"
        ],
        "Hexadecimal": "#D05F04"
    },
    {
        "Color": [
            "Red-Orange (Color Wheel)"
        ],
        "Hexadecimal": "#FF4500"
    },
    {
        "Color": [
            "Red-Purple"
        ],
        "Hexadecimal": "#E40078"
    },
    {
        "Color": [
            "Red-Violet (Color Wheel)"
        ],
        "Hexadecimal": "#922B3E"
    },
    {
        "Color": [
            "Red-Violet (Crayola)"
        ],
        "Hexadecimal": "#C0448F"
    },
    {
        "Color": [
            "Redwood"
        ],
        "Hexadecimal": "#5D1E0F"
    },
    {
        "Color": [
            "Redwood 2"
        ],
        "Hexadecimal": "#A45A52"
    },
    {
        "Color": [
            "Reef"
        ],
        "Hexadecimal": "#C9FFA2"
    },
    {
        "Color": [
            "Reef Gold"
        ],
        "Hexadecimal": "#9F821C"
    },
    {
        "Color": [
            "Regal Blue"
        ],
        "Hexadecimal": "#013F6A"
    },
    {
        "Color": [
            "Regent Gray"
        ],
        "Hexadecimal": "#86949F"
    },
    {
        "Color": [
            "Regent St Blue"
        ],
        "Hexadecimal": "#AAD6E6"
    },
    {
        "Color": [
            "Remy"
        ],
        "Hexadecimal": "#FEEBF3"
    },
    {
        "Color": [
            "Reno Sand"
        ],
        "Hexadecimal": "#A86515"
    },
    {
        "Color": [
            "Resolution Blue"
        ],
        "Hexadecimal": "#002387"
    },
    {
        "Color": [
            "Revolver"
        ],
        "Hexadecimal": "#2C1632"
    },
    {
        "Color": [
            "Rhino"
        ],
        "Hexadecimal": "#2E3F62"
    },
    {
        "Color": [
            "Rhythm"
        ],
        "Hexadecimal": "#777696"
    },
    {
        "Color": [
            "Rice Cake"
        ],
        "Hexadecimal": "#FFFEF0"
    },
    {
        "Color": [
            "Rice Flower"
        ],
        "Hexadecimal": "#EEFFE2"
    },
    {
        "Color": [
            "Rich Black"
        ],
        "Hexadecimal": "#004040"
    },
    {
        "Color": [
            "Rich Black (Fogra29)"
        ],
        "Hexadecimal": "#010B13"
    },
    {
        "Color": [
            "Rich Black (Fogra39)"
        ],
        "Hexadecimal": "#010203"
    },
    {
        "Color": [
            "Rich Gold"
        ],
        "Hexadecimal": "#A85307"
    },
    {
        "Color": [
            "Rifle Green"
        ],
        "Hexadecimal": "#444C38"
    },
    {
        "Color": [
            "Rio Grande"
        ],
        "Hexadecimal": "#BBD009"
    },
    {
        "Color": [
            "Ripe Lemon"
        ],
        "Hexadecimal": "#F4D81C"
    },
    {
        "Color": [
            "Ripe Plum"
        ],
        "Hexadecimal": "#410056"
    },
    {
        "Color": [
            "Riptide"
        ],
        "Hexadecimal": "#8BE6D8"
    },
    {
        "Color": [
            "River Bed"
        ],
        "Hexadecimal": "#434C59"
    },
    {
        "Color": [
            "Rob Roy"
        ],
        "Hexadecimal": "#EAC674"
    },
    {
        "Color": [
            "Robin Egg Blue",
            "Robin's Egg Blue"
        ],
        "Hexadecimal": "#00CCCC"
    },
    {
        "Color": [
            "Rock"
        ],
        "Hexadecimal": "#4D3833"
    },
    {
        "Color": [
            "Rock Blue"
        ],
        "Hexadecimal": "#9EB1CD"
    },
    {
        "Color": [
            "Rock Spray"
        ],
        "Hexadecimal": "#BA450C"
    },
    {
        "Color": [
            "Rocket Metallic"
        ],
        "Hexadecimal": "#8A7F80"
    },
    {
        "Color": [
            "Rodeo Dust"
        ],
        "Hexadecimal": "#C9B29B"
    },
    {
        "Color": [
            "Rojo Spanish Red"
        ],
        "Hexadecimal": "#A91101"
    },
    {
        "Color": [
            "Rolling Stone"
        ],
        "Hexadecimal": "#747D83"
    },
    {
        "Color": [
            "Roman"
        ],
        "Hexadecimal": "#DE6360"
    },
    {
        "Color": [
            "Roman Coffee"
        ],
        "Hexadecimal": "#795D4C"
    },
    {
        "Color": [
            "Roman Silver"
        ],
        "Hexadecimal": "#838996"
    },
    {
        "Color": [
            "Romance"
        ],
        "Hexadecimal": "#FFFEFD"
    },
    {
        "Color": [
            "Romantic"
        ],
        "Hexadecimal": "#FFD2B7"
    },
    {
        "Color": [
            "Ronchi"
        ],
        "Hexadecimal": "#ECC54E"
    },
    {
        "Color": [
            "Roof Terracotta"
        ],
        "Hexadecimal": "#A62F20"
    },
    {
        "Color": [
            "Rope"
        ],
        "Hexadecimal": "#8E4D1E"
    },
    {
        "Color": [
            "Rose"
        ],
        "Hexadecimal": "#FF007F"
    },
    {
        "Color": [
            "Rose Bonbon"
        ],
        "Hexadecimal": "#F9429E"
    },
    {
        "Color": [
            "Rose Bud"
        ],
        "Hexadecimal": "#FBB2A3"
    },
    {
        "Color": [
            "Rose Bud Cherry"
        ],
        "Hexadecimal": "#800B47"
    },
    {
        "Color": [
            "Rose Dust"
        ],
        "Hexadecimal": "#9E5E6F"
    },
    {
        "Color": [
            "Rose Ebony"
        ],
        "Hexadecimal": "#674846"
    },
    {
        "Color": [
            "Rose Fog"
        ],
        "Hexadecimal": "#E7BCB4"
    },
    {
        "Color": [
            "Rose Madder",
            "Alizarin Crimson"
        ],
        "Hexadecimal": "#E32636"
    },
    {
        "Color": [
            "Rose Of Sharon"
        ],
        "Hexadecimal": "#BF5500"
    },
    {
        "Color": [
            "Rose Pink"
        ],
        "Hexadecimal": "#FF66CC"
    },
    {
        "Color": [
            "Rose Red"
        ],
        "Hexadecimal": "#C21E56"
    },
    {
        "Color": [
            "Rose Taupe"
        ],
        "Hexadecimal": "#905D5D"
    },
    {
        "Color": [
            "Rose Vale"
        ],
        "Hexadecimal": "#AB4E52"
    },
    {
        "Color": [
            "Rose White"
        ],
        "Hexadecimal": "#FFF6F5"
    },
    {
        "Color": [
            "Rosewood"
        ],
        "Hexadecimal": "#65000B"
    },
    {
        "Color": [
            "Rosso Corsa"
        ],
        "Hexadecimal": "#D40000"
    },
    {
        "Color": [
            "Rosy Brown"
        ],
        "Hexadecimal": "#BC8F8F"
    },
    {
        "Color": [
            "Roti"
        ],
        "Hexadecimal": "#C6A84B"
    },
    {
        "Color": [
            "Rouge"
        ],
        "Hexadecimal": "#A23B6C"
    },
    {
        "Color": [
            "Royal Blue (Dark)"
        ],
        "Hexadecimal": "#002366"
    },
    {
        "Color": [
            "Royal Blue (Light)",
            "Royal Blue"
        ],
        "Hexadecimal": "#4169E1"
    },
    {
        "Color": [
            "Royal Heath"
        ],
        "Hexadecimal": "#AB3472"
    },
    {
        "Color": [
            "Royal Purple"
        ],
        "Hexadecimal": "#6B3FA0"
    },
    {
        "Color": [
            "Royal Purple 2"
        ],
        "Hexadecimal": "#7851A9"
    },
    {
        "Color": [
            "Ruber"
        ],
        "Hexadecimal": "#CE4676"
    },
    {
        "Color": [
            "Rubine Red"
        ],
        "Hexadecimal": "#D10056"
    },
    {
        "Color": [
            "Ruby"
        ],
        "Hexadecimal": "#E0115F"
    },
    {
        "Color": [
            "Ruby Red"
        ],
        "Hexadecimal": "#9B111E"
    },
    {
        "Color": [
            "Rufous"
        ],
        "Hexadecimal": "#A81C07"
    },
    {
        "Color": [
            "Rum"
        ],
        "Hexadecimal": "#796989"
    },
    {
        "Color": [
            "Rum Swizzle"
        ],
        "Hexadecimal": "#F9F8E4"
    },
    {
        "Color": [
            "Russet"
        ],
        "Hexadecimal": "#80461B"
    },
    {
        "Color": [
            "Russett"
        ],
        "Hexadecimal": "#755A57"
    },
    {
        "Color": [
            "Russian Green"
        ],
        "Hexadecimal": "#679267"
    },
    {
        "Color": [
            "Russian Violet"
        ],
        "Hexadecimal": "#32174D"
    },
    {
        "Color": [
            "Rust"
        ],
        "Hexadecimal": "#B7410E"
    },
    {
        "Color": [
            "Rustic Red"
        ],
        "Hexadecimal": "#480404"
    },
    {
        "Color": [
            "Rusty Nail"
        ],
        "Hexadecimal": "#86560A"
    },
    {
        "Color": [
            "Rusty Red"
        ],
        "Hexadecimal": "#DA2C43"
    },
    {
        "Color": [
            "Sacramento State Green"
        ],
        "Hexadecimal": "#043927"
    },
    {
        "Color": [
            "Saddle"
        ],
        "Hexadecimal": "#4C3024"
    },
    {
        "Color": [
            "Saddle Brown"
        ],
        "Hexadecimal": "#8B4513"
    },
    {
        "Color": [
            "Saddle Brown 2"
        ],
        "Hexadecimal": "#583401"
    },
    {
        "Color": [
            "Safety Orange"
        ],
        "Hexadecimal": "#FF7800"
    },
    {
        "Color": [
            "Safety Orange (Blaze Orange)"
        ],
        "Hexadecimal": "#FF6700"
    },
    {
        "Color": [
            "Safety Yellow"
        ],
        "Hexadecimal": "#EED202"
    },
    {
        "Color": [
            "Saffron"
        ],
        "Hexadecimal": "#F4C430"
    },
    {
        "Color": [
            "Saffron Mango"
        ],
        "Hexadecimal": "#F9BF58"
    },
    {
        "Color": [
            "Sage"
        ],
        "Hexadecimal": "#9EA587"
    },
    {
        "Color": [
            "Sage 2"
        ],
        "Hexadecimal": "#BCB88A"
    },
    {
        "Color": [
            "Sahara"
        ],
        "Hexadecimal": "#B7A214"
    },
    {
        "Color": [
            "Sahara Sand"
        ],
        "Hexadecimal": "#F1E788"
    },
    {
        "Color": [
            "Sail"
        ],
        "Hexadecimal": "#B8E0F9"
    },
    {
        "Color": [
            "Salem"
        ],
        "Hexadecimal": "#097F4B"
    },
    {
        "Color": [
            "Salmon"
        ],
        "Hexadecimal": "#FF8C69"
    },
    {
        "Color": [
            "Salmon 2"
        ],
        "Hexadecimal": "#FA8072"
    },
    {
        "Color": [
            "Salmon Pink",
            "Pink Salmon"
        ],
        "Hexadecimal": "#FF91A4"
    },
    {
        "Color": [
            "Salomie"
        ],
        "Hexadecimal": "#FEDB8D"
    },
    {
        "Color": [
            "Salt Box"
        ],
        "Hexadecimal": "#685E6E"
    },
    {
        "Color": [
            "Saltpan"
        ],
        "Hexadecimal": "#F1F7F2"
    },
    {
        "Color": [
            "Sambuca"
        ],
        "Hexadecimal": "#3A2010"
    },
    {
        "Color": [
            "San Felix"
        ],
        "Hexadecimal": "#0B6207"
    },
    {
        "Color": [
            "San Juan"
        ],
        "Hexadecimal": "#304B6A"
    },
    {
        "Color": [
            "San Marino"
        ],
        "Hexadecimal": "#456CAC"
    },
    {
        "Color": [
            "Sand Dune"
        ],
        "Hexadecimal": "#826F65"
    },
    {
        "Color": [
            "Sandal"
        ],
        "Hexadecimal": "#AA8D6F"
    },
    {
        "Color": [
            "Sandrift"
        ],
        "Hexadecimal": "#AB917A"
    },
    {
        "Color": [
            "Sandstone"
        ],
        "Hexadecimal": "#796D62"
    },
    {
        "Color": [
            "Sandwisp"
        ],
        "Hexadecimal": "#F5E7A2"
    },
    {
        "Color": [
            "Sandy Beach"
        ],
        "Hexadecimal": "#FFEAC8"
    },
    {
        "Color": [
            "Sandy Brown"
        ],
        "Hexadecimal": "#F4A460"
    },
    {
        "Color": [
            "Sangria"
        ],
        "Hexadecimal": "#92000A"
    },
    {
        "Color": [
            "Sanguine Brown"
        ],
        "Hexadecimal": "#8D3D38"
    },
    {
        "Color": [
            "Santa Fe"
        ],
        "Hexadecimal": "#B16D52"
    },
    {
        "Color": [
            "Santas Gray"
        ],
        "Hexadecimal": "#9FA0B1"
    },
    {
        "Color": [
            "Sap Green"
        ],
        "Hexadecimal": "#507D2A"
    },
    {
        "Color": [
            "Sapling"
        ],
        "Hexadecimal": "#DED4A4"
    },
    {
        "Color": [
            "Sapphire"
        ],
        "Hexadecimal": "#0F52BA"
    },
    {
        "Color": [
            "Sapphire 2"
        ],
        "Hexadecimal": "#2F519E"
    },
    {
        "Color": [
            "Sapphire Blue",
            "Sapphire (Crayola)"
        ],
        "Hexadecimal": "#0067A5"
    },
    {
        "Color": [
            "Saratoga"
        ],
        "Hexadecimal": "#555B10"
    },
    {
        "Color": [
            "Satin Linen"
        ],
        "Hexadecimal": "#E6E4D4"
    },
    {
        "Color": [
            "Satin Sheen Gold"
        ],
        "Hexadecimal": "#CBA135"
    },
    {
        "Color": [
            "Sauvignon"
        ],
        "Hexadecimal": "#FFF5F3"
    },
    {
        "Color": [
            "Sazerac"
        ],
        "Hexadecimal": "#FFF4E0"
    },
    {
        "Color": [
            "Scampi"
        ],
        "Hexadecimal": "#675FA6"
    },
    {
        "Color": [
            "Scandal"
        ],
        "Hexadecimal": "#CFFAF4"
    },
    {
        "Color": [
            "Scarlet"
        ],
        "Hexadecimal": "#FF2400"
    },
    {
        "Color": [
            "Scarlet Gum"
        ],
        "Hexadecimal": "#431560"
    },
    {
        "Color": [
            "Scarlett"
        ],
        "Hexadecimal": "#950015"
    },
    {
        "Color": [
            "Scarpa Flow"
        ],
        "Hexadecimal": "#585562"
    },
    {
        "Color": [
            "Schist"
        ],
        "Hexadecimal": "#A9B497"
    },
    {
        "Color": [
            "School Bus Yellow"
        ],
        "Hexadecimal": "#FFD800"
    },
    {
        "Color": [
            "Schooner"
        ],
        "Hexadecimal": "#8B847E"
    },
    {
        "Color": [
            "Science Blue"
        ],
        "Hexadecimal": "#0066CC"
    },
    {
        "Color": [
            "Scooter"
        ],
        "Hexadecimal": "#2EBFD4"
    },
    {
        "Color": [
            "Scorpion"
        ],
        "Hexadecimal": "#695F62"
    },
    {
        "Color": [
            "Scotch Mist"
        ],
        "Hexadecimal": "#FFFBDC"
    },
    {
        "Color": [
            "Screamin' Green"
        ],
        "Hexadecimal": "#66FF66"
    },
    {
        "Color": [
            "Sea Buckthorn"
        ],
        "Hexadecimal": "#FBA129"
    },
    {
        "Color": [
            "Sea Green"
        ],
        "Hexadecimal": "#2E8B57"
    },
    {
        "Color": [
            "Sea Green (Crayola)"
        ],
        "Hexadecimal": "#00FFCD"
    },
    {
        "Color": [
            "Sea Mist"
        ],
        "Hexadecimal": "#C5DBCA"
    },
    {
        "Color": [
            "Sea Nymph"
        ],
        "Hexadecimal": "#78A39C"
    },
    {
        "Color": [
            "Sea Pink"
        ],
        "Hexadecimal": "#ED989E"
    },
    {
        "Color": [
            "Seagull"
        ],
        "Hexadecimal": "#80CCEA"
    },
    {
        "Color": [
            "Seal Brown"
        ],
        "Hexadecimal": "#59260B"
    },
    {
        "Color": [
            "Seance"
        ],
        "Hexadecimal": "#731E8F"
    },
    {
        "Color": [
            "Seashell"
        ],
        "Hexadecimal": "#F1F1F1"
    },
    {
        "Color": [
            "Seashell Peach"
        ],
        "Hexadecimal": "#FFF5EE"
    },
    {
        "Color": [
            "Seaweed"
        ],
        "Hexadecimal": "#1B2F11"
    },
    {
        "Color": [
            "Selago"
        ],
        "Hexadecimal": "#F0EEFD"
    },
    {
        "Color": [
            "Selective Yellow"
        ],
        "Hexadecimal": "#FFBA00"
    },
    {
        "Color": [
            "Sepia"
        ],
        "Hexadecimal": "#704214"
    },
    {
        "Color": [
            "Sepia Black"
        ],
        "Hexadecimal": "#2B0202"
    },
    {
        "Color": [
            "Sepia Skin"
        ],
        "Hexadecimal": "#9E5B40"
    },
    {
        "Color": [
            "Serenade"
        ],
        "Hexadecimal": "#FFF4E8"
    },
    {
        "Color": [
            "Shadow"
        ],
        "Hexadecimal": "#837050"
    },
    {
        "Color": [
            "Shadow 2"
        ],
        "Hexadecimal": "#8A795D"
    },
    {
        "Color": [
            "Shadow Blue"
        ],
        "Hexadecimal": "#778BA5"
    },
    {
        "Color": [
            "Shadow Green"
        ],
        "Hexadecimal": "#9AC2B8"
    },
    {
        "Color": [
            "Shady Lady"
        ],
        "Hexadecimal": "#AAA5A9"
    },
    {
        "Color": [
            "Shakespeare"
        ],
        "Hexadecimal": "#4EABD1"
    },
    {
        "Color": [
            "Shalimar"
        ],
        "Hexadecimal": "#FBFFBA"
    },
    {
        "Color": [
            "Shamrock"
        ],
        "Hexadecimal": "#33CC99"
    },
    {
        "Color": [
            "Shamrock Green"
        ],
        "Hexadecimal": "#009E60"
    },
    {
        "Color": [
            "Shark"
        ],
        "Hexadecimal": "#25272C"
    },
    {
        "Color": [
            "Sheen Green"
        ],
        "Hexadecimal": "#8FD400"
    },
    {
        "Color": [
            "Sherpa Blue"
        ],
        "Hexadecimal": "#004950"
    },
    {
        "Color": [
            "Sherwood Green"
        ],
        "Hexadecimal": "#02402C"
    },
    {
        "Color": [
            "Shilo"
        ],
        "Hexadecimal": "#E8B9B3"
    },
    {
        "Color": [
            "Shimmering Blush"
        ],
        "Hexadecimal": "#D98695"
    },
    {
        "Color": [
            "Shingle Fawn"
        ],
        "Hexadecimal": "#6B4E31"
    },
    {
        "Color": [
            "Shiny Shamrock"
        ],
        "Hexadecimal": "#5FA778"
    },
    {
        "Color": [
            "Ship Cove"
        ],
        "Hexadecimal": "#788BBA"
    },
    {
        "Color": [
            "Ship Gray"
        ],
        "Hexadecimal": "#3E3A44"
    },
    {
        "Color": [
            "Shiraz"
        ],
        "Hexadecimal": "#B20931"
    },
    {
        "Color": [
            "Shocking"
        ],
        "Hexadecimal": "#E292C0"
    },
    {
        "Color": [
            "Shocking Pink"
        ],
        "Hexadecimal": "#FC0FC0"
    },
    {
        "Color": [
            "Shocking Pink (Crayola)",
            "Ultra Pink",
            "Blush Pink"
        ],
        "Hexadecimal": "#FF6FFF"
    },
    {
        "Color": [
            "Shuttle Gray"
        ],
        "Hexadecimal": "#5F6672"
    },
    {
        "Color": [
            "Siam"
        ],
        "Hexadecimal": "#646A54"
    },
    {
        "Color": [
            "Sidecar"
        ],
        "Hexadecimal": "#F3E7BB"
    },
    {
        "Color": [
            "Silk"
        ],
        "Hexadecimal": "#BDB1A8"
    },
    {
        "Color": [
            "Silver"
        ],
        "Hexadecimal": "#C0C0C0"
    },
    {
        "Color": [
            "Silver (Metallic)"
        ],
        "Hexadecimal": "#AAA9AD"
    },
    {
        "Color": [
            "Silver Chalice"
        ],
        "Hexadecimal": "#ACACAC"
    },
    {
        "Color": [
            "Silver Pink"
        ],
        "Hexadecimal": "#C4AEAD"
    },
    {
        "Color": [
            "Silver Sand"
        ],
        "Hexadecimal": "#BFC1C2"
    },
    {
        "Color": [
            "Silver Tree"
        ],
        "Hexadecimal": "#66B58F"
    },
    {
        "Color": [
            "Sinbad"
        ],
        "Hexadecimal": "#9FD7D3"
    },
    {
        "Color": [
            "Sinopia"
        ],
        "Hexadecimal": "#CB410B"
    },
    {
        "Color": [
            "Siren"
        ],
        "Hexadecimal": "#7A013A"
    },
    {
        "Color": [
            "Sirocco"
        ],
        "Hexadecimal": "#718080"
    },
    {
        "Color": [
            "Sisal"
        ],
        "Hexadecimal": "#D3CBBA"
    },
    {
        "Color": [
            "Sizzling Red"
        ],
        "Hexadecimal": "#FF3855"
    },
    {
        "Color": [
            "Sizzling Sunrise"
        ],
        "Hexadecimal": "#FFDB00"
    },
    {
        "Color": [
            "Skeptic"
        ],
        "Hexadecimal": "#CAE6DA"
    },
    {
        "Color": [
            "Skobeloff"
        ],
        "Hexadecimal": "#007474"
    },
    {
        "Color": [
            "Sky Blue"
        ],
        "Hexadecimal": "#87CEEB"
    },
    {
        "Color": [
            "Sky Blue (Crayola)"
        ],
        "Hexadecimal": "#76D7EA"
    },
    {
        "Color": [
            "Sky Magenta"
        ],
        "Hexadecimal": "#CF71AF"
    },
    {
        "Color": [
            "Slate Blue"
        ],
        "Hexadecimal": "#6A5ACD"
    },
    {
        "Color": [
            "Slate Gray"
        ],
        "Hexadecimal": "#708090"
    },
    {
        "Color": [
            "Slimy Green"
        ],
        "Hexadecimal": "#299617"
    },
    {
        "Color": [
            "Smalt"
        ],
        "Hexadecimal": "#003399"
    },
    {
        "Color": [
            "Smalt Blue"
        ],
        "Hexadecimal": "#51808F"
    },
    {
        "Color": [
            "Smitten"
        ],
        "Hexadecimal": "#C84186"
    },
    {
        "Color": [
            "Smoky"
        ],
        "Hexadecimal": "#605B73"
    },
    {
        "Color": [
            "Smoky Black"
        ],
        "Hexadecimal": "#100C08"
    },
    {
        "Color": [
            "Snow"
        ],
        "Hexadecimal": "#FFFAFA"
    },
    {
        "Color": [
            "Snow Drift"
        ],
        "Hexadecimal": "#F7FAF7"
    },
    {
        "Color": [
            "Snow Flurry"
        ],
        "Hexadecimal": "#E4FFD1"
    },
    {
        "Color": [
            "Snowy Mint"
        ],
        "Hexadecimal": "#D6FFDB"
    },
    {
        "Color": [
            "Snuff"
        ],
        "Hexadecimal": "#E2D8ED"
    },
    {
        "Color": [
            "Soapstone"
        ],
        "Hexadecimal": "#FFFBF9"
    },
    {
        "Color": [
            "Soft Amber"
        ],
        "Hexadecimal": "#D1C6B4"
    },
    {
        "Color": [
            "Soft Peach"
        ],
        "Hexadecimal": "#F5EDEF"
    },
    {
        "Color": [
            "Solid Pink"
        ],
        "Hexadecimal": "#893843"
    },
    {
        "Color": [
            "Solitaire"
        ],
        "Hexadecimal": "#FEF8E2"
    },
    {
        "Color": [
            "Solitude"
        ],
        "Hexadecimal": "#EAF6FF"
    },
    {
        "Color": [
            "Sonic Silver"
        ],
        "Hexadecimal": "#757575"
    },
    {
        "Color": [
            "Sorbus"
        ],
        "Hexadecimal": "#FD7C07"
    },
    {
        "Color": [
            "Sorrell Brown"
        ],
        "Hexadecimal": "#CEB98F"
    },
    {
        "Color": [
            "Soya Bean"
        ],
        "Hexadecimal": "#6A6051"
    },
    {
        "Color": [
            "Space Cadet"
        ],
        "Hexadecimal": "#1D2951"
    },
    {
        "Color": [
            "Spanish Bistre"
        ],
        "Hexadecimal": "#807532"
    },
    {
        "Color": [
            "Spanish Blue"
        ],
        "Hexadecimal": "#0070B8"
    },
    {
        "Color": [
            "Spanish Carmine"
        ],
        "Hexadecimal": "#D10047"
    },
    {
        "Color": [
            "Spanish Gray"
        ],
        "Hexadecimal": "#989898"
    },
    {
        "Color": [
            "Spanish Green"
        ],
        "Hexadecimal": "#819885"
    },
    {
        "Color": [
            "Spanish Green 2"
        ],
        "Hexadecimal": "#009150"
    },
    {
        "Color": [
            "Spanish Orange"
        ],
        "Hexadecimal": "#E86100"
    },
    {
        "Color": [
            "Spanish Pink"
        ],
        "Hexadecimal": "#F7BFBE"
    },
    {
        "Color": [
            "Spanish Red"
        ],
        "Hexadecimal": "#E60026"
    },
    {
        "Color": [
            "Spanish Violet"
        ],
        "Hexadecimal": "#4C2882"
    },
    {
        "Color": [
            "Spanish Viridian"
        ],
        "Hexadecimal": "#007F5C"
    },
    {
        "Color": [
            "Spectra"
        ],
        "Hexadecimal": "#2F5A57"
    },
    {
        "Color": [
            "Spice"
        ],
        "Hexadecimal": "#6A442E"
    },
    {
        "Color": [
            "Spicy Mix"
        ],
        "Hexadecimal": "#885342"
    },
    {
        "Color": [
            "Spicy Mustard"
        ],
        "Hexadecimal": "#74640D"
    },
    {
        "Color": [
            "Spicy Pink"
        ],
        "Hexadecimal": "#816E71"
    },
    {
        "Color": [
            "Spindle"
        ],
        "Hexadecimal": "#B6D1EA"
    },
    {
        "Color": [
            "Spray"
        ],
        "Hexadecimal": "#79DEEC"
    },
    {
        "Color": [
            "Spring Bud"
        ],
        "Hexadecimal": "#A7FC00"
    },
    {
        "Color": [
            "Spring Frost"
        ],
        "Hexadecimal": "#87FF2A"
    },
    {
        "Color": [
            "Spring Green"
        ],
        "Hexadecimal": "#00FF7F"
    },
    {
        "Color": [
            "Spring Leaves"
        ],
        "Hexadecimal": "#578363"
    },
    {
        "Color": [
            "Spring Rain"
        ],
        "Hexadecimal": "#ACCBB1"
    },
    {
        "Color": [
            "Spring Sun"
        ],
        "Hexadecimal": "#F6FFDC"
    },
    {
        "Color": [
            "Spring Wood"
        ],
        "Hexadecimal": "#F8F6F1"
    },
    {
        "Color": [
            "Sprout"
        ],
        "Hexadecimal": "#C1D7B0"
    },
    {
        "Color": [
            "Spun Pearl"
        ],
        "Hexadecimal": "#AAABB7"
    },
    {
        "Color": [
            "Squirrel"
        ],
        "Hexadecimal": "#8F8176"
    },
    {
        "Color": [
            "St Tropaz"
        ],
        "Hexadecimal": "#2D569B"
    },
    {
        "Color": [
            "St. Patrick's Blue"
        ],
        "Hexadecimal": "#23297A"
    },
    {
        "Color": [
            "Stack"
        ],
        "Hexadecimal": "#8A8F8A"
    },
    {
        "Color": [
            "Star Command Blue"
        ],
        "Hexadecimal": "#007BB8"
    },
    {
        "Color": [
            "Star Dust"
        ],
        "Hexadecimal": "#9F9F9C"
    },
    {
        "Color": [
            "Stark White"
        ],
        "Hexadecimal": "#E5D7BD"
    },
    {
        "Color": [
            "Starship"
        ],
        "Hexadecimal": "#ECF245"
    },
    {
        "Color": [
            "Steel Blue"
        ],
        "Hexadecimal": "#4682B4"
    },
    {
        "Color": [
            "Steel Gray"
        ],
        "Hexadecimal": "#262335"
    },
    {
        "Color": [
            "Steel Pink"
        ],
        "Hexadecimal": "#CC33CC"
    },
    {
        "Color": [
            "Steel Teal"
        ],
        "Hexadecimal": "#5F8A8B"
    },
    {
        "Color": [
            "Stiletto"
        ],
        "Hexadecimal": "#9C3336"
    },
    {
        "Color": [
            "Stonewall"
        ],
        "Hexadecimal": "#928573"
    },
    {
        "Color": [
            "Storm Dust"
        ],
        "Hexadecimal": "#646463"
    },
    {
        "Color": [
            "Storm Gray"
        ],
        "Hexadecimal": "#717486"
    },
    {
        "Color": [
            "Stratos"
        ],
        "Hexadecimal": "#000741"
    },
    {
        "Color": [
            "Straw"
        ],
        "Hexadecimal": "#D4BF8D"
    },
    {
        "Color": [
            "Straw 2"
        ],
        "Hexadecimal": "#E4D96F"
    },
    {
        "Color": [
            "Strawberry"
        ],
        "Hexadecimal": "#FA5053"
    },
    {
        "Color": [
            "Strawberry Blonde"
        ],
        "Hexadecimal": "#FF9361"
    },
    {
        "Color": [
            "Strikemaster"
        ],
        "Hexadecimal": "#956387"
    },
    {
        "Color": [
            "Stromboli"
        ],
        "Hexadecimal": "#325D52"
    },
    {
        "Color": [
            "Studio"
        ],
        "Hexadecimal": "#714AB2"
    },
    {
        "Color": [
            "Submarine"
        ],
        "Hexadecimal": "#BAC7C9"
    },
    {
        "Color": [
            "Sugar Cane"
        ],
        "Hexadecimal": "#F9FFF6"
    },
    {
        "Color": [
            "Sugar Plum"
        ],
        "Hexadecimal": "#914E75"
    },
    {
        "Color": [
            "Sulu"
        ],
        "Hexadecimal": "#C1F07C"
    },
    {
        "Color": [
            "Summer Green"
        ],
        "Hexadecimal": "#96BBAB"
    },
    {
        "Color": [
            "Sun"
        ],
        "Hexadecimal": "#FBAC13"
    },
    {
        "Color": [
            "Sundance"
        ],
        "Hexadecimal": "#C9B35B"
    },
    {
        "Color": [
            "Sundown"
        ],
        "Hexadecimal": "#FFB1B3"
    },
    {
        "Color": [
            "Sunflower"
        ],
        "Hexadecimal": "#E4D422"
    },
    {
        "Color": [
            "Sunglo"
        ],
        "Hexadecimal": "#E16865"
    },
    {
        "Color": [
            "Sunglow"
        ],
        "Hexadecimal": "#FFCC33"
    },
    {
        "Color": [
            "Sunray"
        ],
        "Hexadecimal": "#E3AB57"
    },
    {
        "Color": [
            "Sunset Orange"
        ],
        "Hexadecimal": "#FE4C40"
    },
    {
        "Color": [
            "Sunshade"
        ],
        "Hexadecimal": "#FF9E2C"
    },
    {
        "Color": [
            "Super Pink"
        ],
        "Hexadecimal": "#CF6BA9"
    },
    {
        "Color": [
            "Supernova"
        ],
        "Hexadecimal": "#FFC901"
    },
    {
        "Color": [
            "Surf"
        ],
        "Hexadecimal": "#BBD7C1"
    },
    {
        "Color": [
            "Surf Crest"
        ],
        "Hexadecimal": "#CFE5D2"
    },
    {
        "Color": [
            "Surfie Green"
        ],
        "Hexadecimal": "#0C7A79"
    },
    {
        "Color": [
            "Sushi"
        ],
        "Hexadecimal": "#87AB39"
    },
    {
        "Color": [
            "Suva Gray"
        ],
        "Hexadecimal": "#888387"
    },
    {
        "Color": [
            "Swamp"
        ],
        "Hexadecimal": "#001B1C"
    },
    {
        "Color": [
            "Swamp Green"
        ],
        "Hexadecimal": "#ACB78E"
    },
    {
        "Color": [
            "Swans Down"
        ],
        "Hexadecimal": "#DCF0EA"
    },
    {
        "Color": [
            "Sweet Brown"
        ],
        "Hexadecimal": "#A83731"
    },
    {
        "Color": [
            "Sweet Corn"
        ],
        "Hexadecimal": "#FBEA8C"
    },
    {
        "Color": [
            "Sweet Pink"
        ],
        "Hexadecimal": "#FD9FA2"
    },
    {
        "Color": [
            "Swirl"
        ],
        "Hexadecimal": "#D3CDC5"
    },
    {
        "Color": [
            "Swiss Coffee"
        ],
        "Hexadecimal": "#DDD6D5"
    },
    {
        "Color": [
            "Sycamore"
        ],
        "Hexadecimal": "#908D39"
    },
    {
        "Color": [
            "Syracuse Orange"
        ],
        "Hexadecimal": "#D44500"
    },
    {
        "Color": [
            "Tabasco"
        ],
        "Hexadecimal": "#A02712"
    },
    {
        "Color": [
            "Tacao"
        ],
        "Hexadecimal": "#EDB381"
    },
    {
        "Color": [
            "Tacha"
        ],
        "Hexadecimal": "#D6C562"
    },
    {
        "Color": [
            "Tahiti Gold"
        ],
        "Hexadecimal": "#E97C07"
    },
    {
        "Color": [
            "Tahuna Sands"
        ],
        "Hexadecimal": "#EEF0C8"
    },
    {
        "Color": [
            "Tall Poppy"
        ],
        "Hexadecimal": "#B32D29"
    },
    {
        "Color": [
            "Tallow"
        ],
        "Hexadecimal": "#A8A589"
    },
    {
        "Color": [
            "Tamarillo"
        ],
        "Hexadecimal": "#991613"
    },
    {
        "Color": [
            "Tamarind"
        ],
        "Hexadecimal": "#341515"
    },
    {
        "Color": [
            "Tan"
        ],
        "Hexadecimal": "#D2B48C"
    },
    {
        "Color": [
            "Tan (Crayola)"
        ],
        "Hexadecimal": "#D99A6C"
    },
    {
        "Color": [
            "Tan Hide"
        ],
        "Hexadecimal": "#FA9D5A"
    },
    {
        "Color": [
            "Tana"
        ],
        "Hexadecimal": "#D9DCC1"
    },
    {
        "Color": [
            "Tangaroa"
        ],
        "Hexadecimal": "#03163C"
    },
    {
        "Color": [
            "Tangerine"
        ],
        "Hexadecimal": "#F28500"
    },
    {
        "Color": [
            "Tango"
        ],
        "Hexadecimal": "#ED7A1C"
    },
    {
        "Color": [
            "Tapa"
        ],
        "Hexadecimal": "#7B7874"
    },
    {
        "Color": [
            "Tapestry"
        ],
        "Hexadecimal": "#B05E81"
    },
    {
        "Color": [
            "Tara"
        ],
        "Hexadecimal": "#E1F6E8"
    },
    {
        "Color": [
            "Tarawera"
        ],
        "Hexadecimal": "#073A50"
    },
    {
        "Color": [
            "Tart Orange"
        ],
        "Hexadecimal": "#FB4D46"
    },
    {
        "Color": [
            "Tasman"
        ],
        "Hexadecimal": "#CFDCCF"
    },
    {
        "Color": [
            "Taupe Gray"
        ],
        "Hexadecimal": "#8B8589"
    },
    {
        "Color": [
            "Taupe Gray 2"
        ],
        "Hexadecimal": "#B3AF95"
    },
    {
        "Color": [
            "Tawny Port"
        ],
        "Hexadecimal": "#692545"
    },
    {
        "Color": [
            "Te Papa Green"
        ],
        "Hexadecimal": "#1E433C"
    },
    {
        "Color": [
            "Tea"
        ],
        "Hexadecimal": "#C1BAB0"
    },
    {
        "Color": [
            "Tea Green"
        ],
        "Hexadecimal": "#D0F0C0"
    },
    {
        "Color": [
            "Teak"
        ],
        "Hexadecimal": "#B19461"
    },
    {
        "Color": [
            "Teal"
        ],
        "Hexadecimal": "#008080"
    },
    {
        "Color": [
            "Teal Blue"
        ],
        "Hexadecimal": "#367588"
    },
    {
        "Color": [
            "Teal Blue 2"
        ],
        "Hexadecimal": "#044259"
    },
    {
        "Color": [
            "Telemagenta"
        ],
        "Hexadecimal": "#CF3476"
    },
    {
        "Color": [
            "Temptress"
        ],
        "Hexadecimal": "#3B000B"
    },
    {
        "Color": [
            "Tenné (Tawny)",
            "Tenn"
        ],
        "Hexadecimal": "#CD5700"
    },
    {
        "Color": [
            "Tequila"
        ],
        "Hexadecimal": "#FFE6C7"
    },
    {
        "Color": [
            "Terracotta"
        ],
        "Hexadecimal": "#E2725B"
    },
    {
        "Color": [
            "Texas"
        ],
        "Hexadecimal": "#F8F99C"
    },
    {
        "Color": [
            "Texas Rose"
        ],
        "Hexadecimal": "#FFB555"
    },
    {
        "Color": [
            "Thatch"
        ],
        "Hexadecimal": "#B69D98"
    },
    {
        "Color": [
            "Thatch Green"
        ],
        "Hexadecimal": "#403D19"
    },
    {
        "Color": [
            "Thistle"
        ],
        "Hexadecimal": "#D8BFD8"
    },
    {
        "Color": [
            "Thistle Green"
        ],
        "Hexadecimal": "#CCCAA8"
    },
    {
        "Color": [
            "Thunder"
        ],
        "Hexadecimal": "#33292F"
    },
    {
        "Color": [
            "Thunderbird"
        ],
        "Hexadecimal": "#C02B18"
    },
    {
        "Color": [
            "Tia Maria"
        ],
        "Hexadecimal": "#C1440E"
    },
    {
        "Color": [
            "Tiara"
        ],
        "Hexadecimal": "#C3D1D1"
    },
    {
        "Color": [
            "Tiber"
        ],
        "Hexadecimal": "#063537"
    },
    {
        "Color": [
            "Tickle Me Pink"
        ],
        "Hexadecimal": "#FC80A5"
    },
    {
        "Color": [
            "Tickle Me Pink 2"
        ],
        "Hexadecimal": "#FC89AC"
    },
    {
        "Color": [
            "Tidal"
        ],
        "Hexadecimal": "#F1FFAD"
    },
    {
        "Color": [
            "Tide"
        ],
        "Hexadecimal": "#BFB8B0"
    },
    {
        "Color": [
            "Tiffany Blue"
        ],
        "Hexadecimal": "#81D8D0"
    },
    {
        "Color": [
            "Timber Green"
        ],
        "Hexadecimal": "#16322C"
    },
    {
        "Color": [
            "Timberwolf"
        ],
        "Hexadecimal": "#D9D6CF"
    },
    {
        "Color": [
            "Timberwolf 2"
        ],
        "Hexadecimal": "#DBD7D2"
    },
    {
        "Color": [
            "Titan White"
        ],
        "Hexadecimal": "#F0EEFF"
    },
    {
        "Color": [
            "Titanium Yellow"
        ],
        "Hexadecimal": "#EEE600"
    },
    {
        "Color": [
            "Toast"
        ],
        "Hexadecimal": "#9A6E61"
    },
    {
        "Color": [
            "Tobacco Brown"
        ],
        "Hexadecimal": "#715D47"
    },
    {
        "Color": [
            "Toledo"
        ],
        "Hexadecimal": "#3A0020"
    },
    {
        "Color": [
            "Tolopea"
        ],
        "Hexadecimal": "#1B0245"
    },
    {
        "Color": [
            "Tom Thumb"
        ],
        "Hexadecimal": "#3F583B"
    },
    {
        "Color": [
            "Tomato"
        ],
        "Hexadecimal": "#FF6347"
    },
    {
        "Color": [
            "Tonys Pink"
        ],
        "Hexadecimal": "#E79F8C"
    },
    {
        "Color": [
            "Topaz"
        ],
        "Hexadecimal": "#7C778A"
    },
    {
        "Color": [
            "Torch Red"
        ],
        "Hexadecimal": "#FD0E35"
    },
    {
        "Color": [
            "Torea Bay"
        ],
        "Hexadecimal": "#0F2D9E"
    },
    {
        "Color": [
            "Tory Blue"
        ],
        "Hexadecimal": "#1450AA"
    },
    {
        "Color": [
            "Tosca"
        ],
        "Hexadecimal": "#8D3F3F"
    },
    {
        "Color": [
            "Totem Pole"
        ],
        "Hexadecimal": "#991B07"
    },
    {
        "Color": [
            "Tower Gray"
        ],
        "Hexadecimal": "#A9BDBF"
    },
    {
        "Color": [
            "Tradewind"
        ],
        "Hexadecimal": "#5FB3AC"
    },
    {
        "Color": [
            "Tranquil"
        ],
        "Hexadecimal": "#E6FFFF"
    },
    {
        "Color": [
            "Travertine"
        ],
        "Hexadecimal": "#FFFDE8"
    },
    {
        "Color": [
            "Tree Poppy"
        ],
        "Hexadecimal": "#FC9C1D"
    },
    {
        "Color": [
            "Treehouse"
        ],
        "Hexadecimal": "#3B2820"
    },
    {
        "Color": [
            "Trendy Green"
        ],
        "Hexadecimal": "#7C881A"
    },
    {
        "Color": [
            "Trendy Pink"
        ],
        "Hexadecimal": "#8C6495"
    },
    {
        "Color": [
            "Trinidad"
        ],
        "Hexadecimal": "#E64E03"
    },
    {
        "Color": [
            "Tropical Blue"
        ],
        "Hexadecimal": "#C3DDF9"
    },
    {
        "Color": [
            "Tropical Rainforest",
            "Tropical Rain Forest"
        ],
        "Hexadecimal": "#00755E"
    },
    {
        "Color": [
            "Trout"
        ],
        "Hexadecimal": "#4A4E5A"
    },
    {
        "Color": [
            "True Blue"
        ],
        "Hexadecimal": "#2D68C4"
    },
    {
        "Color": [
            "True V"
        ],
        "Hexadecimal": "#8A73D6"
    },
    {
        "Color": [
            "Trypan Blue"
        ],
        "Hexadecimal": "#1C05B3"
    },
    {
        "Color": [
            "Tuatara"
        ],
        "Hexadecimal": "#363534"
    },
    {
        "Color": [
            "Tuft Bush"
        ],
        "Hexadecimal": "#FFDDCD"
    },
    {
        "Color": [
            "Tufts Blue"
        ],
        "Hexadecimal": "#3E8EDE"
    },
    {
        "Color": [
            "Tulip Tree"
        ],
        "Hexadecimal": "#EAB33B"
    },
    {
        "Color": [
            "Tumbleweed"
        ],
        "Hexadecimal": "#DEA681"
    },
    {
        "Color": [
            "Tumbleweed 2"
        ],
        "Hexadecimal": "#DEAA88"
    },
    {
        "Color": [
            "Tuna"
        ],
        "Hexadecimal": "#353542"
    },
    {
        "Color": [
            "Tundora"
        ],
        "Hexadecimal": "#4A4244"
    },
    {
        "Color": [
            "Turbo"
        ],
        "Hexadecimal": "#FAE600"
    },
    {
        "Color": [
            "Turkish Rose"
        ],
        "Hexadecimal": "#B57281"
    },
    {
        "Color": [
            "Turmeric"
        ],
        "Hexadecimal": "#CABB48"
    },
    {
        "Color": [
            "Turquoise"
        ],
        "Hexadecimal": "#40E0D0"
    },
    {
        "Color": [
            "Turquoise 2"
        ],
        "Hexadecimal": "#30D5C8"
    },
    {
        "Color": [
            "Turquoise Blue"
        ],
        "Hexadecimal": "#6CDAE7"
    },
    {
        "Color": [
            "Turquoise Blue 2"
        ],
        "Hexadecimal": "#00FFEF"
    },
    {
        "Color": [
            "Turquoise Green"
        ],
        "Hexadecimal": "#A0D6B4"
    },
    {
        "Color": [
            "Turtle Green"
        ],
        "Hexadecimal": "#2A380B"
    },
    {
        "Color": [
            "Tuscan Brown"
        ],
        "Hexadecimal": "#6F4E37"
    },
    {
        "Color": [
            "Tuscan Red"
        ],
        "Hexadecimal": "#7C4848"
    },
    {
        "Color": [
            "Tuscany"
        ],
        "Hexadecimal": "#C09999"
    },
    {
        "Color": [
            "Tuscany 2"
        ],
        "Hexadecimal": "#BD5E2E"
    },
    {
        "Color": [
            "Tusk"
        ],
        "Hexadecimal": "#EEF3C3"
    },
    {
        "Color": [
            "Tussock"
        ],
        "Hexadecimal": "#C5994B"
    },
    {
        "Color": [
            "Tutu"
        ],
        "Hexadecimal": "#FFF1F9"
    },
    {
        "Color": [
            "Twilight"
        ],
        "Hexadecimal": "#E4CFDE"
    },
    {
        "Color": [
            "Twilight Blue"
        ],
        "Hexadecimal": "#EEFDFF"
    },
    {
        "Color": [
            "Twilight Lavender"
        ],
        "Hexadecimal": "#8A496B"
    },
    {
        "Color": [
            "Twine"
        ],
        "Hexadecimal": "#C2955D"
    },
    {
        "Color": [
            "Tyrian Purple"
        ],
        "Hexadecimal": "#66023C"
    },
    {
        "Color": [
            "UA Blue"
        ],
        "Hexadecimal": "#0033AA"
    },
    {
        "Color": [
            "UA Red"
        ],
        "Hexadecimal": "#D9004C"
    },
    {
        "Color": [
            "Ultra Red"
        ],
        "Hexadecimal": "#FC6C85"
    },
    {
        "Color": [
            "Ultramarine"
        ],
        "Hexadecimal": "#120A8F"
    },
    {
        "Color": [
            "Ultramarine 2"
        ],
        "Hexadecimal": "#3F00FF"
    },
    {
        "Color": [
            "Ultramarine Blue"
        ],
        "Hexadecimal": "#4166F5"
    },
    {
        "Color": [
            "Umber"
        ],
        "Hexadecimal": "#635147"
    },
    {
        "Color": [
            "Unbleached Silk"
        ],
        "Hexadecimal": "#FFDDCA"
    },
    {
        "Color": [
            "United Nations Blue"
        ],
        "Hexadecimal": "#5B92E5"
    },
    {
        "Color": [
            "University Of Pennsylvania Red"
        ],
        "Hexadecimal": "#A50021"
    },
    {
        "Color": [
            "UP Maroon"
        ],
        "Hexadecimal": "#7B1113"
    },
    {
        "Color": [
            "Upsdell Red"
        ],
        "Hexadecimal": "#AE2029"
    },
    {
        "Color": [
            "Uranian Blue"
        ],
        "Hexadecimal": "#AFDBF5"
    },
    {
        "Color": [
            "USAFA Blue"
        ],
        "Hexadecimal": "#004F98"
    },
    {
        "Color": [
            "Valencia"
        ],
        "Hexadecimal": "#D84437"
    },
    {
        "Color": [
            "Valentino"
        ],
        "Hexadecimal": "#350E42"
    },
    {
        "Color": [
            "Valhalla"
        ],
        "Hexadecimal": "#2B194F"
    },
    {
        "Color": [
            "Van Cleef"
        ],
        "Hexadecimal": "#49170C"
    },
    {
        "Color": [
            "Van Dyke Brown"
        ],
        "Hexadecimal": "#664228"
    },
    {
        "Color": [
            "Vanilla"
        ],
        "Hexadecimal": "#D1BEA8"
    },
    {
        "Color": [
            "Vanilla Ice"
        ],
        "Hexadecimal": "#F38FA9"
    },
    {
        "Color": [
            "Vanilla Ice 2"
        ],
        "Hexadecimal": "#F3D9DF"
    },
    {
        "Color": [
            "Varden"
        ],
        "Hexadecimal": "#FFF6DF"
    },
    {
        "Color": [
            "Vegas Gold"
        ],
        "Hexadecimal": "#C5B358"
    },
    {
        "Color": [
            "Venetian Red"
        ],
        "Hexadecimal": "#C80815"
    },
    {
        "Color": [
            "Venetian Red 2"
        ],
        "Hexadecimal": "#72010F"
    },
    {
        "Color": [
            "Venice Blue"
        ],
        "Hexadecimal": "#055989"
    },
    {
        "Color": [
            "Venus"
        ],
        "Hexadecimal": "#928590"
    },
    {
        "Color": [
            "Verdigris"
        ],
        "Hexadecimal": "#43B3AE"
    },
    {
        "Color": [
            "Verdigris 2"
        ],
        "Hexadecimal": "#5D5E37"
    },
    {
        "Color": [
            "Verdun Green"
        ],
        "Hexadecimal": "#495400"
    },
    {
        "Color": [
            "Vermilion"
        ],
        "Hexadecimal": "#FF4D00"
    },
    {
        "Color": [
            "Vermilion 2"
        ],
        "Hexadecimal": "#D9381E"
    },
    {
        "Color": [
            "Vesuvius"
        ],
        "Hexadecimal": "#B14A0B"
    },
    {
        "Color": [
            "Victoria"
        ],
        "Hexadecimal": "#534491"
    },
    {
        "Color": [
            "Vida Loca"
        ],
        "Hexadecimal": "#549019"
    },
    {
        "Color": [
            "Viking"
        ],
        "Hexadecimal": "#64CCDB"
    },
    {
        "Color": [
            "Vin Rouge"
        ],
        "Hexadecimal": "#983D61"
    },
    {
        "Color": [
            "Viola"
        ],
        "Hexadecimal": "#CB8FA9"
    },
    {
        "Color": [
            "Violent Violet"
        ],
        "Hexadecimal": "#290C5E"
    },
    {
        "Color": [
            "Violet"
        ],
        "Hexadecimal": "#240A40"
    },
    {
        "Color": [
            "Violet (Color Wheel)"
        ],
        "Hexadecimal": "#7F00FF"
    },
    {
        "Color": [
            "Violet (Crayola)"
        ],
        "Hexadecimal": "#963D7F"
    },
    {
        "Color": [
            "Violet (RYB)"
        ],
        "Hexadecimal": "#8601AF"
    },
    {
        "Color": [
            "Violet Eggplant"
        ],
        "Hexadecimal": "#991199"
    },
    {
        "Color": [
            "Violet Red"
        ],
        "Hexadecimal": "#F75394"
    },
    {
        "Color": [
            "Violet Red 2"
        ],
        "Hexadecimal": "#F7468A"
    },
    {
        "Color": [
            "Violet-Blue"
        ],
        "Hexadecimal": "#324AB2"
    },
    {
        "Color": [
            "Violet-Blue (Crayola)"
        ],
        "Hexadecimal": "#766EC8"
    },
    {
        "Color": [
            "Viridian"
        ],
        "Hexadecimal": "#40826D"
    },
    {
        "Color": [
            "Viridian Green"
        ],
        "Hexadecimal": "#678975"
    },
    {
        "Color": [
            "Viridian Green 2"
        ],
        "Hexadecimal": "#009698"
    },
    {
        "Color": [
            "Vis Vis"
        ],
        "Hexadecimal": "#FFEFA1"
    },
    {
        "Color": [
            "Vista Blue"
        ],
        "Hexadecimal": "#8FD6B4"
    },
    {
        "Color": [
            "Vista White"
        ],
        "Hexadecimal": "#FCF8F7"
    },
    {
        "Color": [
            "Vivid Burgundy"
        ],
        "Hexadecimal": "#9F1D35"
    },
    {
        "Color": [
            "Vivid Sky Blue"
        ],
        "Hexadecimal": "#00CCFF"
    },
    {
        "Color": [
            "Vivid Tangerine"
        ],
        "Hexadecimal": "#FF9980"
    },
    {
        "Color": [
            "Vivid Tangerine 2"
        ],
        "Hexadecimal": "#FFA089"
    },
    {
        "Color": [
            "Vivid Violet"
        ],
        "Hexadecimal": "#803790"
    },
    {
        "Color": [
            "Vivid Violet 2"
        ],
        "Hexadecimal": "#9F00FF"
    },
    {
        "Color": [
            "Volt"
        ],
        "Hexadecimal": "#CEFF00"
    },
    {
        "Color": [
            "Voodoo"
        ],
        "Hexadecimal": "#533455"
    },
    {
        "Color": [
            "Vulcan"
        ],
        "Hexadecimal": "#10121D"
    },
    {
        "Color": [
            "Wafer"
        ],
        "Hexadecimal": "#DECBC6"
    },
    {
        "Color": [
            "Waikawa Gray"
        ],
        "Hexadecimal": "#5A6E9C"
    },
    {
        "Color": [
            "Waiouru"
        ],
        "Hexadecimal": "#363C0D"
    },
    {
        "Color": [
            "Walnut"
        ],
        "Hexadecimal": "#773F1A"
    },
    {
        "Color": [
            "Warm Black"
        ],
        "Hexadecimal": "#004242"
    },
    {
        "Color": [
            "Wasabi"
        ],
        "Hexadecimal": "#788A25"
    },
    {
        "Color": [
            "Water Leaf"
        ],
        "Hexadecimal": "#A1E9DE"
    },
    {
        "Color": [
            "Watercourse"
        ],
        "Hexadecimal": "#056F57"
    },
    {
        "Color": [
            "Waterloo"
        ],
        "Hexadecimal": "#7B7C94"
    },
    {
        "Color": [
            "Wattle"
        ],
        "Hexadecimal": "#DCD747"
    },
    {
        "Color": [
            "Watusi"
        ],
        "Hexadecimal": "#FFDDCF"
    },
    {
        "Color": [
            "Wax Flower"
        ],
        "Hexadecimal": "#FFC0A8"
    },
    {
        "Color": [
            "We Peep"
        ],
        "Hexadecimal": "#F7DBE6"
    },
    {
        "Color": [
            "Wedgewood"
        ],
        "Hexadecimal": "#4E7F9E"
    },
    {
        "Color": [
            "Weezy Blue"
        ],
        "Hexadecimal": "#189BCC"
    },
    {
        "Color": [
            "Well Read"
        ],
        "Hexadecimal": "#B43332"
    },
    {
        "Color": [
            "West Coast"
        ],
        "Hexadecimal": "#625119"
    },
    {
        "Color": [
            "West Side"
        ],
        "Hexadecimal": "#FF910F"
    },
    {
        "Color": [
            "Westar"
        ],
        "Hexadecimal": "#DCD9D2"
    },
    {
        "Color": [
            "Wewak"
        ],
        "Hexadecimal": "#F19BAB"
    },
    {
        "Color": [
            "Wheat"
        ],
        "Hexadecimal": "#F5DEB3"
    },
    {
        "Color": [
            "Wheatfield"
        ],
        "Hexadecimal": "#F3EDCF"
    },
    {
        "Color": [
            "Whiskey"
        ],
        "Hexadecimal": "#D59A6F"
    },
    {
        "Color": [
            "Whisper"
        ],
        "Hexadecimal": "#F7F5FA"
    },
    {
        "Color": [
            "White"
        ],
        "Hexadecimal": "#FFFFFF"
    },
    {
        "Color": [
            "White Ice"
        ],
        "Hexadecimal": "#DDF9F1"
    },
    {
        "Color": [
            "White Lilac"
        ],
        "Hexadecimal": "#F8F7FC"
    },
    {
        "Color": [
            "White Linen"
        ],
        "Hexadecimal": "#F8F0E8"
    },
    {
        "Color": [
            "White Pointer"
        ],
        "Hexadecimal": "#FEF8FF"
    },
    {
        "Color": [
            "White Rock"
        ],
        "Hexadecimal": "#EAE8D4"
    },
    {
        "Color": [
            "Wild Blue Yonder"
        ],
        "Hexadecimal": "#7A89B8"
    },
    {
        "Color": [
            "Wild Blue Yonder 2"
        ],
        "Hexadecimal": "#A2ADD0"
    },
    {
        "Color": [
            "Wild Orchid"
        ],
        "Hexadecimal": "#D470A2"
    },
    {
        "Color": [
            "Wild Rice"
        ],
        "Hexadecimal": "#ECE090"
    },
    {
        "Color": [
            "Wild Sand"
        ],
        "Hexadecimal": "#F4F4F4"
    },
    {
        "Color": [
            "Wild Strawberry"
        ],
        "Hexadecimal": "#FF43A4"
    },
    {
        "Color": [
            "Wild Strawberry 2"
        ],
        "Hexadecimal": "#FF3399"
    },
    {
        "Color": [
            "Wild Watermelon"
        ],
        "Hexadecimal": "#FD5B78"
    },
    {
        "Color": [
            "Wild Willow"
        ],
        "Hexadecimal": "#B9C46A"
    },
    {
        "Color": [
            "William"
        ],
        "Hexadecimal": "#3A686C"
    },
    {
        "Color": [
            "Willow Brook"
        ],
        "Hexadecimal": "#DFECDA"
    },
    {
        "Color": [
            "Willow Grove"
        ],
        "Hexadecimal": "#65745D"
    },
    {
        "Color": [
            "Windsor"
        ],
        "Hexadecimal": "#3C0878"
    },
    {
        "Color": [
            "Windsor Tan"
        ],
        "Hexadecimal": "#A75502"
    },
    {
        "Color": [
            "Wine"
        ],
        "Hexadecimal": "#722F37"
    },
    {
        "Color": [
            "Wine Berry"
        ],
        "Hexadecimal": "#591D35"
    },
    {
        "Color": [
            "Winter Hazel"
        ],
        "Hexadecimal": "#D5D195"
    },
    {
        "Color": [
            "Winter Sky"
        ],
        "Hexadecimal": "#FF007C"
    },
    {
        "Color": [
            "Wintergreen Dream"
        ],
        "Hexadecimal": "#56887D"
    },
    {
        "Color": [
            "Wisp Pink"
        ],
        "Hexadecimal": "#FEF4F8"
    },
    {
        "Color": [
            "Wisteria"
        ],
        "Hexadecimal": "#9771B5"
    },
    {
        "Color": [
            "Wistful"
        ],
        "Hexadecimal": "#A4A6D3"
    },
    {
        "Color": [
            "Witch Haze"
        ],
        "Hexadecimal": "#FFFC99"
    },
    {
        "Color": [
            "Wood Bark"
        ],
        "Hexadecimal": "#261105"
    },
    {
        "Color": [
            "Woodland"
        ],
        "Hexadecimal": "#4D5328"
    },
    {
        "Color": [
            "Woodrush"
        ],
        "Hexadecimal": "#302A0F"
    },
    {
        "Color": [
            "Woodsmoke"
        ],
        "Hexadecimal": "#0C0D0F"
    },
    {
        "Color": [
            "Woody Brown"
        ],
        "Hexadecimal": "#483131"
    },
    {
        "Color": [
            "Xanadu"
        ],
        "Hexadecimal": "#738678"
    },
    {
        "Color": [
            "Xanthic"
        ],
        "Hexadecimal": "#EEED09"
    },
    {
        "Color": [
            "Xanthous"
        ],
        "Hexadecimal": "#F1B42F"
    },
    {
        "Color": [
            "Yale Blue"
        ],
        "Hexadecimal": "#00356B"
    },
    {
        "Color": [
            "Yellow"
        ],
        "Hexadecimal": "#FFFF00"
    },
    {
        "Color": [
            "Yellow (Crayola)"
        ],
        "Hexadecimal": "#FCE883"
    },
    {
        "Color": [
            "Yellow (MUNSELL)"
        ],
        "Hexadecimal": "#EFCC00"
    },
    {
        "Color": [
            "Yellow (PANTONE)"
        ],
        "Hexadecimal": "#FEDF00"
    },
    {
        "Color": [
            "Yellow (RYB)"
        ],
        "Hexadecimal": "#FEFE33"
    },
    {
        "Color": [
            "Yellow Green"
        ],
        "Hexadecimal": "#9ACD32"
    },
    {
        "Color": [
            "Yellow Green 2"
        ],
        "Hexadecimal": "#C5E17A"
    },
    {
        "Color": [
            "Yellow Metal"
        ],
        "Hexadecimal": "#716338"
    },
    {
        "Color": [
            "Yellow Orange"
        ],
        "Hexadecimal": "#FFAE42"
    },
    {
        "Color": [
            "Yellow Orange (Color Wheel)"
        ],
        "Hexadecimal": "#FF9505"
    },
    {
        "Color": [
            "Yellow Sea"
        ],
        "Hexadecimal": "#FEA904"
    },
    {
        "Color": [
            "Yellow Sunshine"
        ],
        "Hexadecimal": "#FFF700"
    },
    {
        "Color": [
            "Yellow-Green (Color Wheel)"
        ],
        "Hexadecimal": "#30B21A"
    },
    {
        "Color": [
            "Yellow-Green (Crayola)"
        ],
        "Hexadecimal": "#C5E384"
    },
    {
        "Color": [
            "YInMn Blue"
        ],
        "Hexadecimal": "#2E5090"
    },
    {
        "Color": [
            "Your Pink"
        ],
        "Hexadecimal": "#FFC3C0"
    },
    {
        "Color": [
            "Yukon Gold"
        ],
        "Hexadecimal": "#7B6608"
    },
    {
        "Color": [
            "Yuma"
        ],
        "Hexadecimal": "#CEC291"
    },
    {
        "Color": [
            "Zaffre"
        ],
        "Hexadecimal": "#0014A8"
    },
    {
        "Color": [
            "Zambezi"
        ],
        "Hexadecimal": "#685558"
    },
    {
        "Color": [
            "Zanah"
        ],
        "Hexadecimal": "#DAECD6"
    },
    {
        "Color": [
            "Zest"
        ],
        "Hexadecimal": "#E5841B"
    },
    {
        "Color": [
            "Zeus"
        ],
        "Hexadecimal": "#292319"
    },
    {
        "Color": [
            "Ziggurat"
        ],
        "Hexadecimal": "#BFDBE2"
    },
    {
        "Color": [
            "Zinnwaldite"
        ],
        "Hexadecimal": "#EBC2AF"
    },
    {
        "Color": [
            "Zircon"
        ],
        "Hexadecimal": "#F4F8FF"
    },
    {
        "Color": [
            "Zombie"
        ],
        "Hexadecimal": "#E4D69B"
    },
    {
        "Color": [
            "Zomp"
        ],
        "Hexadecimal": "#39A78E"
    },
    {
        "Color": [
            "Zorba"
        ],
        "Hexadecimal": "#A59B91"
    },
    {
        "Color": [
            "Zuccini"
        ],
        "Hexadecimal": "#044022"
    },
    {
        "Color": [
            "Zumthor"
        ],
        "Hexadecimal": "#EDF6FF"
    }
]

/**
 * Generates a hexadecimal color from various input types.
 * @param {string|number|Array|Object|HTMLElement} input - The input to generate the color from.
 * @returns {string|string[]} - The hexadecimal color code, or an array of codes if input is an array.
 */
function generateColor(input) {

    // If input is an HTML element, apply the function to its text content
    if (input instanceof HTMLElement) {
        const text = input.textContent || input.innerText || '';
        const colors = generateReadableColor(text);
        input.style.color = colors[0];
        input.style.backgroundColor = colors[1];
        return colors[1];
    }

    // If input is an array, map generateColor recursively over each element
    if (Array.isArray(input)) {
        return input.map(function (item) { return generateColor(item); });
    }

    // if input is a number string, convert to number
    if (typeof input === 'string' && !isNaN(input)) {
        input = Number(input);
    }

    // If input is a number, use it as an index
    if (typeof input === 'number') {

        if (!Number.isInteger(input)) {
            //multiply by 10 until it is an integer, to allow for decimal inputs
            while (!Number.isInteger(input)) {
                input *= 10;
            }
        }

        if (input >= 0 && input < colorDatabase.length) {
            return colorDatabase[input].Hexadecimal;
        }

        // Index out of range: generate deterministic color from the number itself
        var hash = input;
        var color = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            color += value.toString(16).padStart(2, '0');
        }
        return color;

    }

    // If input is an object (but not null, Array, or HTMLElement), convert to string
    if (typeof input === 'object' && input !== null) {
        return generateColor(String(input));
    }

    var normalizedText = String(input || '').trim();

    // separate PascalCase and camelCase words with spaces
    normalizedText = normalizedText.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2').toLowerCase();

    // if blank or"random" keyword
    if (normalizedText === '' || normalizedText === 'random') {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    //if "transparent" keyword
    if (normalizedText === 'transparent') {
        return '#00000000'; // Return transparent color in RGBA hex format
    }



    // Try to set the text as a CSS color
    var s = new Option().style;
    s.color = normalizedText;
    if (s.color !== '') {
        var ctx = document.createElement('canvas').getContext('2d');
        ctx.fillStyle = normalizedText;
        return ctx.fillStyle;
    }

    // HEX color
    if (/^#?[0-9a-f]{3}$|^#?[0-9a-f]{6}$/i.test(normalizedText)) {
        return normalizedText.startsWith('#') ? normalizedText : '#' + normalizedText;
    }

    // RGB color
    if (/^rgb\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/.test(normalizedText)) {
        var rgb = normalizedText.match(/\d{1,3}/g).map(Number);
        return '#' + rgb.map(function (x) { return x.toString(16).padStart(2, '0'); }).join('');
    }

    // RGBA color
    if (/^rgba\(\s*(\d{1,3}\s*,\s*){3}(0|1|0?\.\d+)\s*\)$/.test(normalizedText)) {
        var rgba = normalizedText.match(/(\d{1,3}|0|1|0?\.\d+)/g);
        var r = parseInt(rgba[0]);
        var g = parseInt(rgba[1]);
        var b = parseInt(rgba[2]);
        var a = parseFloat(rgba[3]);
        var alphaHex = Math.round(a * 255).toString(16).padStart(2, '0');
        return '#' + [r, g, b].map(function (x) { return x.toString(16).padStart(2, '0'); }).join('') + alphaHex;
    }




    // ─── Name lookup in the color database ───
    // Since each entry can have multiple names (Color array), we search across all names.
    // First, save the text with spaces intact for later multi-word detection
    var textForMultipleWords = normalizedText;

    normalizedText = normalizedText.replace(/[^a-z0-9]/g, '');


    // 1. Exact match (case-insensitive, ignoring non-alphanumeric chars)
    for (var ci = 0; ci < colorDatabase.length; ci++) {
        var entry = colorDatabase[ci];
        for (var ni = 0; ni < entry.Color.length; ni++) {
            var normalizedName = entry.Color[ni].toLowerCase().replace(/[^a-z0-9]/g, '');
            if (normalizedName === normalizedText) {
                return entry.Hexadecimal;
            }
        }
    }

    // 2. Contains match (case-insensitive)
    for (var ci2 = 0; ci2 < colorDatabase.length; ci2++) {
        var entry2 = colorDatabase[ci2];
        for (var ni2 = 0; ni2 < entry2.Color.length; ni2++) {
            if (entry2.Color[ni2].toLowerCase().indexOf(normalizedText) !== -1) {
                return entry2.Hexadecimal;
            }
        }
    }

    // 3. Multiple words (First word color modified iteratively by each subsequent word)
    var multipleWords = textForMultipleWords.split(/\s+/).filter(Boolean);
    if (multipleWords.length > 1) {

        // ── Modifier reordering ──
        // Words starting with "dark", "light", "bright", or "random" are
        // treated as modifiers for the next non-modifier word. They are moved
        // after that word so the modifier is applied during the iterative blend.
        //
        // Examples:
        //   "Dark Blue"       → ["Blue", "Dark"]
        //   "Any Light Red"   → ["Any", "Red", "Light"]
        //   "Dark Dark Blue"  → ["Blue", "Dark", "Dark"]
        //   "Darkish Blue"    → ["Blue", "Darkish"]
        //   "Darker Blue"     → ["Blue", "Dark", "Dark"]   (darker = 2× dark)
        //   "Lighter Red"     → ["Red", "Light", "Light"]  (lighter = 2× light)
        //   "Brighter Green"  → ["Green", "Bright", "Bright"]
        //   "Random Red"      → ["Red", "Random"]  (generates a random variation of Red)
        //   "Random Dark Red" → ["Red", "Random", "Dark"]

        var modifierPrefixes = ['dark', 'light', 'bright'];
        var reordered = [];
        var modifierBuffer = [];

        function isModifierWord(word) {
            for (var p = 0; p < modifierPrefixes.length; p++) {
                if (word.indexOf(modifierPrefixes[p]) === 0) {
                    return true;
                }
            }
            return false;
        }

        function isRandomWord(word) {
            return word.indexOf('random') === 0;
        }

        for (var wi = 0; wi < multipleWords.length; wi++) {
            var word = multipleWords[wi];

            if (isModifierWord(word)) {
                // Expand equivalent modifiers: darker → dark dark, lighter → light light, brighter → bright bright
                var baseForm = word.replace(/er$/, '');
                if (baseForm !== word && (baseForm === 'dark' || baseForm === 'light' || baseForm === 'bright')) {
                    modifierBuffer.push(baseForm);
                    modifierBuffer.push(baseForm);
                } else {
                    modifierBuffer.push(word);
                }
            } else if (isRandomWord(word)) {
                // "Random" words are also moved after the next non-modifier word,
                // but they don't get the expansion treatment
                modifierBuffer.push(word);
            } else {
                // Non-modifier word: place it first, then flush buffered modifiers after it
                reordered.push(word);
                for (var b = 0; b < modifierBuffer.length; b++) {
                    reordered.push(modifierBuffer[b]);
                }
                modifierBuffer = [];
            }
        }

        // If any modifiers remain at the end (no following non-modifier word), append them
        for (var b = 0; b < modifierBuffer.length; b++) {
            reordered.push(modifierBuffer[b]);
        }

        multipleWords = reordered;

        // ── Iterative blending ──
        // Start with the first word's color, then blend each subsequent word
        // one at a time. Each blend applies 75% of the current color and 25%
        // of the next word's color, so multiple modifiers compound naturally.
        // Words starting with "random" generate a random HSL variation of the
        // current color instead of blending with a deterministic color.

        var ratio = 0.75;
        var resultColor = generateColor(multipleWords[0]);

        for (var wi2 = 1; wi2 < multipleWords.length; wi2++) {
            var word = multipleWords[wi2];

            if (isRandomWord(word)) {
                // Apply a random HSL variation to the current color
                var hsl = hexToHsl(resultColor);
                var hueShift = Math.floor(Math.random() * 61) - 30;   // ±30°
                var satShift = Math.floor(Math.random() * 41) - 20;   // ±20%
                var lightShift = Math.floor(Math.random() * 41) - 20; // ±20%
                resultColor = hslToHex(
                    ((hsl.h + hueShift) % 360 + 360) % 360,
                    Math.max(0, Math.min(100, hsl.s + satShift)),
                    Math.max(0, Math.min(100, hsl.l + lightShift))
                );
            } else {
                var wordColor = generateColor(word);
                resultColor = blendColors(resultColor, wordColor, ratio);
            }
        }

        return resultColor;
    }


    // 3. Levenshtein distance (best match, max distance threshold)
    var bestMatch = null;
    var bestDistance = Infinity;

    for (var ci3 = 0; ci3 < colorDatabase.length; ci3++) {
        var entry3 = colorDatabase[ci3];
        for (var ni3 = 0; ni3 < entry3.Color.length; ni3++) {
            var normalizedName3 = entry3.Color[ni3].toLowerCase().replace(/[^a-z0-9]/g, '');
            var distance = levenshteinDistance(normalizedText, normalizedName3);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestMatch = entry3;
            }
        }
    }

    var maxDistance = 3;
    if (bestDistance <= maxDistance && bestMatch) {
        return bestMatch.Hexadecimal;
    }

    function levenshteinDistance(a, b) {
        var matrix = Array.from({ length: a.length + 1 }, function () { return Array(b.length + 1).fill(0); });

        for (var i = 0; i <= a.length; i++) {
            matrix[i][0] = i;
        }

        for (var j = 0; j <= b.length; j++) {
            matrix[0][j] = j;
        }

        for (var i = 1; i <= a.length; i++) {
            for (var j = 1; j <= b.length; j++) {
                var cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }

        return matrix[a.length][b.length];
    }


    // ─── Deterministic fallback ───
    var hash2 = 0;
    for (var i2 = 0; i2 < normalizedText.length; i2++) {
        hash2 = normalizedText.charCodeAt(i2) + ((hash2 << 5) - hash2);
    }

    var color2 = '#';
    for (var i3 = 0; i3 < 3; i3++) {
        var value2 = (hash2 >> (i3 * 8)) & 0xFF;
        color2 += value2.toString(16).padStart(2, '0');
    }

    return color2;
}

/**
 * Converts a hexadecimal color value to RGB format.
 * @param {string} hex - Color in #rrggbb format.
 * @returns {{ r: number, g: number, b: number }} Object with r, g, b channels (0-255).
 */
function hexToRgb(hex) {
    return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
    };
}

/**
 * Blends two hexadecimal colors together by a ratio.
 * @param {string} color1 - First color in #rrggbb format.
 * @param {string} color2 - Second color in #rrggbb format.
 * @param {number} ratio - Blend ratio (0 = fully color2, 1 = fully color1).
 * @returns {string} Blended color in #rrggbb format.
 */
function blendColors(color1, color2, ratio) {
    var r1 = parseInt(color1.slice(1, 3), 16);
    var g1 = parseInt(color1.slice(3, 5), 16);
    var b1 = parseInt(color1.slice(5, 7), 16);

    var r2 = parseInt(color2.slice(1, 3), 16);
    var g2 = parseInt(color2.slice(3, 5), 16);
    var b2 = parseInt(color2.slice(5, 7), 16);

    var r = Math.round(r1 * ratio + r2 * (1 - ratio));
    var g = Math.round(g1 * ratio + g2 * (1 - ratio));
    var b = Math.round(b1 * ratio + b2 * (1 - ratio));

    return '#' +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');
}

/**
 * Averages an array of hexadecimal colors into a single color.
 * @param {string[]} colors - Array of colors in #rrggbb format.
 * @returns {string} Average color in #rrggbb format.
 */
function averageColors(colors) {
    if (!colors || colors.length === 0) {
        return '#000000';
    }

    var totalR = 0, totalG = 0, totalB = 0;
    for (var i = 0; i < colors.length; i++) {
        var rgb = hexToRgb(colors[i]);
        totalR += rgb.r;
        totalG += rgb.g;
        totalB += rgb.b;
    }

    var count = colors.length;
    return '#' +
        Math.round(totalR / count).toString(16).padStart(2, '0') +
        Math.round(totalG / count).toString(16).padStart(2, '0') +
        Math.round(totalB / count).toString(16).padStart(2, '0');
}

/**
 * Calculates the relative luminance of a color in sRGB space.
 * @param {string} hex - Color in #rrggbb format.
 * @returns {number} Relative luminance between 0 (black) and 1 (white).
 */
function relativeLuminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const toLinear = (channel) => {
        const srgb = channel / 255;
        return srgb <= 0.03928
            ? srgb / 12.92
            : Math.pow((srgb + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Determines whether a color generated from any input is considered LIGHT.
 * Uses generateColor() to obtain the color hex and then calculates relative luminance.
 * A color is considered light when its relative luminance is greater than 0.5
 * (above the midpoint between black and white).
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {boolean} `true` if the color is light, `false` otherwise.
 *
 * @example
 * isLight(1);      // false — Absolute Zero (#0048BA) is dark
 * isLight('gold'); // true  — gold is light
 * isLight('black') // false — black is dark
 */
function isLight(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return false;
    }
    return relativeLuminance(hex) > 0.5;
}

/**
 * Determines whether a color generated from any input is considered DARK.
 * It is the logical inverse of isLight(). A color is considered dark
 * when its relative luminance is less than or equal to 0.5.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {boolean} `true` if the color is dark, `false` otherwise.
 *
 * @example
 * isDark(1);      // true  — Absolute Zero (#0048BA) is dark
 * isDark('gold'); // false — gold is light
 * isDark('white') // false — white is light
 */
function isDark(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return false;
    }
    return relativeLuminance(hex) <= 0.5;
}

/**
 * Determines whether a color generated from any input is considered HOT (warm).
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {boolean} `true` if the color is hot/warm, `false` otherwise.
 *
 * @example
 * isHot('red');       // true  — red is warm
 * isHot('blue');      // false — blue is cool
 * isHot('gold');      // true  — gold is warm
 * isHot('gray');      // false — gray is neutral (achromatic)
 */
function isHot(input) {
    return temperature(input).toLowerCase().includes('hot');
}

/**
 * Determines whether a color generated from any input is considered COLD (cool).
 * Delegates to temperature() internally — returns true when the temperature
 * level contains "cold" (i.e., Cold or VeryCold).
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {boolean} `true` if the color is cold/cool, `false` otherwise.
 *
 * @example
 * isCold('blue');     // true  — blue is cool
 * isCold('red');      // false — red is warm
 * isCold('cyan');     // true  — cyan is cool
 * isCold('gray');     // false — gray is neutral (achromatic)
 */
function isCold(input) {
    return temperature(input).toLowerCase().includes('cold');
}

/**
 * Returns the temperature level of a color generated from any input.
 * Uses a continuous two-factor scoring system for smooth, intuitive results:
 *
 * 1. **HSL Hue** — mapped via a piecewise linear function aligned with the
 *    warm/cool regions (0°–90° warm, 90°–330° cool, 330°–360° warm):
 *    - 0° (red) = +1 (warmest) → 90° (yellow-green) = 0 (neutral)
 *    - 90° → 210° (teal) = -1 (coldest) → 330° (pink) = 0 (neutral)
 *    - 330° → 360° (red) = +1 (warmest)
 *    Achromatic colors (saturation = 0) get a score of 0 for this factor.
 *
 * 2. **Direct RGB** — normalized difference `(R - B) / 255`, ranging from
 *    -1 (blue ≫ red) to +1 (red ≫ blue).
 *
 * The two factors are averaged into a final score ranging from -1 (coldest)
 * to +1 (warmest), which is then mapped to 7 distinct levels.
 *
 * | Score Range       | Returns       |
 * |-------------------|---------------|
 * | > 0.6             | VeryHot       |
 * | > 0.25            | Hot           |
 * | > 0.02            | Neutral Hot   |
 * | -0.02 to 0.02     | Neutral       |
 * | < -0.02           | Neutral Cold  |
 * | < -0.25           | Cold          |
 * | < -0.6            | VeryCold      |
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string} One of: "VeryHot", "Hot", "Neutral Hot", "Neutral",
 *   "Neutral Cold", "Cold", "VeryCold".
 *
 * @example
 * temperature('red');          // "VeryHot"       — hue 0° (+1), R >> B (≈+1)
 * temperature('gold');         // "VeryHot"       — hue 51° (+0.43), R >> B (+1)
 * temperature('tomato');       // "VeryHot"       — hue 9° (+0.9), R >> B (+0.72)
 * temperature('pink');         // "Hot"           — hue 350° (+0.67), R > B (+0.2)
 * temperature('chartreuse');   // "Neutral Hot"   — hue 90° (0), R > B (+0.5)
 * temperature('gray');         // "Neutral"       — achromatic, R = B (0)
 * temperature('magenta');      // "Neutral Cold"  — hue 300° (-0.25), R = B (0)
 * temperature('green');        // "Neutral Cold"  — hue 120° (-0.25), R = B (0)
 * temperature('purple');       // "Cold"          — hue 270° (-0.5), R = B (0)
 * temperature('#1E90FF');      // "VeryCold"      — hue 210° (-1), R << B (-0.88)
 * temperature('cyan');         // "VeryCold"      — hue 180° (-0.75), R << B (-1)
 * temperature('blue');         // "VeryCold"      — hue 240° (-0.75), R << B (-1)
 */
function temperature(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return 'Neutral';
    }

    var rgb = hexToRgb(hex);
    var hsl = hexToHsl(hex);

    // ── Hue warmth: continuous -1 to +1 (piecewise linear) ──
    // Regions: 0°–90° warm, 90°–210° cooling, 210°–330° warming, 330°–360° warm
    var hueWarmth = 0;
    if (hsl.s > 0) {
        var h = hsl.h;
        if (h <= 90) {
            // 0° (red) = +1 → 90° (yellow-green) = 0
            hueWarmth = 1 - h / 90;
        } else if (h <= 210) {
            // 90° = 0 → 210° (teal) = -1 (coldest point)
            hueWarmth = -(h - 90) / 120;
        } else if (h <= 330) {
            // 210° = -1 → 330° (pink) = 0
            hueWarmth = -(330 - h) / 120;
        } else {
            // 330° = 0 → 360° (red) = +1
            hueWarmth = (h - 330) / 30;
        }
    }

    // ── RGB warmth: continuous -1 to +1 ──
    var rgbWarmth = (rgb.r - rgb.b) / 255;

    // ── Combined score (-1 to +1) ──
    var score = (hueWarmth + rgbWarmth) / 2;

    // ── Map to 7 levels ──
    if (score > 0.6) return 'VeryHot';
    if (score > 0.25) return 'Hot';
    if (score > 0.02) return 'Neutral Hot';
    if (score >= -0.02) return 'Neutral';
    if (score >= -0.25) return 'Neutral Cold';
    if (score >= -0.6) return 'Cold';
    return 'VeryCold';
}

/**
 * Normalizes a color string to #rrggbb hexadecimal format.
 * Accepts #rrggbb, #rgb, #rrggbbaa, black, white and returns null if invalid.
 * @param {string} value
 * @returns {string|null} Color in #rrggbb format or null.
 */
function normalizeHex(value) {
    if (typeof value !== 'string') {
        return null;
    }

    var text = value.trim().toLowerCase();

    if (/^#[0-9a-f]{6}$/.test(text)) {
        return text;
    }

    if (/^#[0-9a-f]{3}$/.test(text)) {
        return '#' + text.slice(1).split('').map(function (ch) { return ch + ch; }).join('');
    }

    if (/^#[0-9a-f]{8}$/.test(text)) {
        return '#' + text.slice(1, 7);
    }

    if (/^black$/.test(text)) {
        return '#000000';
    }

    if (/^white$/.test(text)) {
        return '#ffffff';
    }

    return null;
}

/**
 * Converts a #rrggbb hexadecimal color to HSL (Hue, Saturation, Lightness) space.
 * @param {string} hex - Color in #rrggbb format.
 * @returns {{ h: number, s: number, l: number }} h (0-360), s (0-100), l (0-100).
 */
function hexToHsl(hex) {
    var r = parseInt(hex.slice(1, 3), 16) / 255;
    var g = parseInt(hex.slice(3, 5), 16) / 255;
    var b = parseInt(hex.slice(5, 7), 16) / 255;

    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;

    if (max !== min) {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

/**
 * Converts an HSL (Hue, Saturation, Lightness) color back to #rrggbb hexadecimal.
 * @param {number} h - Hue (0-360).
 * @param {number} s - Saturation (0-100).
 * @param {number} l - Lightness (0-100).
 * @returns {string} Color in #rrggbb format.
 */
function hslToHex(h, s, l) {
    h = (h % 360 + 360) % 360 / 360;
    s = Math.max(0, Math.min(100, s)) / 100;
    l = Math.max(0, Math.min(100, l)) / 100;

    var hueToRgb = function (p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    var r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return '#' +
        Math.round(r * 255).toString(16).padStart(2, '0') +
        Math.round(g * 255).toString(16).padStart(2, '0') +
        Math.round(b * 255).toString(16).padStart(2, '0');
}

/**
 * ═══════════════════════════════════════════════════════════════
 *  Mood Classification
 * ═══════════════════════════════════════════════════════════════
 */

/**
 * Classifies the mood(s) / atmosphere of a color based on its HSL values.
 *
 * The function evaluates the generated color against a set of mathematical
 * rules that define different color moods (atmospheres). If the color fits
 * one or more rules exactly, those moods are returned. If no rule matches
 * exactly, a proximity-based scoring system finds the closest mood(s). If
 * no mood is close enough, an empty array is returned.
 *
 * **Mood Reference Table**
 *
 * | Mood          | Description                                                            |
 * |---------------|------------------------------------------------------------------------|
 * | Vibrant       | High saturation, medium lightness, warm-red hues (reds, oranges, yellows) |
 * | Futuristic    | Very high saturation, medium lightness, cool hues (cyans, blues, purples) |
 * | Fun           | High saturation, high lightness (bright, playful colors)                  |
 * | Soft Pastel   | Low saturation, high lightness (delicate, muted colors)                   |
 * | Calm          | Cool blue-green hues, medium-low saturation, medium-high lightness        |
 * | Vintage       | Warm muted hues, medium saturation, medium lightness (retro feel)         |
 * | Organic       | Earthy greens & warm hues, medium saturation, medium lightness            |
 * | Sophisticated | Medium saturation, low lightness (deep, elegant colors)                   |
 * | Dark          | Very low saturation, very low lightness (near-black muted colors)         |
 * | Corporate     | Low-saturation blue, or pure grays (professional, business-like)         |
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array of mood names in English, or empty array if no mood matches.
 *
 * @example
 * mood('#FF4500');        // ["Vibrant"]               — OrangeRed
 * mood('#0000FF');        // ["Futuristic"]             — pure blue
 * mood('#4682B4');        // ["Calm","Corporate","Sophisticated"] — Steel Blue
 * mood('#1A1A1A');        // ["Corporate"]              — near-black gray
 * mood('#FFFFFF');        // ["Corporate"]              — white (S &lt; 10)
 * mood('invalid color');  // []
 */
function mood(input) {
    // ── 1. Generate normalized hex color ──
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return [];
    }

    // ── 2. Convert to HSL ──
    var hsl = hexToHsl(hex);
    var h = hsl.h;
    var s = hsl.s;
    var l = hsl.l;

    // ── 3. Define mood rules ──
    var moodRules = [
        {
            name: 'Vibrant',
            check: function (h, s, l) {
                return s >= 80 && l >= 50 && l <= 70 && (h <= 60 || h >= 330);
            },
            constrainH: true, hRanges: [[0, 60], [330, 360]],
            constrainS: true, sRange: [80, 100],
            constrainL: true, lRange: [50, 70]
        },
        {
            name: 'Futuristic',
            check: function (h, s, l) {
                return s >= 90 && l >= 45 && l <= 55 && ((h >= 180 && h <= 220) || (h >= 280 && h <= 320));
            },
            constrainH: true, hRanges: [[180, 220], [280, 320]],
            constrainS: true, sRange: [90, 100],
            constrainL: true, lRange: [45, 55]
        },
        {
            name: 'Fun',
            check: function (h, s, l) {
                return s >= 65 && s <= 90 && l >= 65 && l <= 80;
            },
            constrainS: true, sRange: [65, 90],
            constrainL: true, lRange: [65, 80]
        },
        {
            name: 'Soft Pastel',
            check: function (h, s, l) {
                return s >= 15 && s <= 40 && l >= 80 && l <= 95;
            },
            constrainS: true, sRange: [15, 40],
            constrainL: true, lRange: [80, 95]
        },
        {
            name: 'Calm',
            check: function (h, s, l) {
                return h >= 160 && h <= 260 && s >= 20 && s <= 50 && l >= 60 && l <= 85;
            },
            constrainH: true, hRanges: [[160, 260]],
            constrainS: true, sRange: [20, 50],
            constrainL: true, lRange: [60, 85]
        },
        {
            name: 'Vintage',
            check: function (h, s, l) {
                return h >= 20 && h <= 50 && s >= 30 && s <= 50 && l >= 40 && l <= 60;
            },
            constrainH: true, hRanges: [[20, 50]],
            constrainS: true, sRange: [30, 50],
            constrainL: true, lRange: [40, 60]
        },
        {
            name: 'Organic',
            check: function (h, s, l) {
                return ((h >= 30 && h <= 45) || (h >= 90 && h <= 140)) && s >= 40 && s <= 60 && l >= 40 && l <= 55;
            },
            constrainH: true, hRanges: [[30, 45], [90, 140]],
            constrainS: true, sRange: [40, 60],
            constrainL: true, lRange: [40, 55]
        },
        {
            name: 'Sophisticated',
            check: function (h, s, l) {
                return s >= 40 && s <= 75 && l >= 10 && l <= 35;
            },
            constrainS: true, sRange: [40, 75],
            constrainL: true, lRange: [10, 35]
        },
        {
            name: 'Dark',
            check: function (h, s, l) {
                return s >= 5 && s <= 25 && l >= 10 && l <= 25;
            },
            constrainS: true, sRange: [5, 25],
            constrainL: true, lRange: [10, 25]
        },
        {
            name: 'Corporate',
            check: function (h, s, l) {
                return (h >= 210 && h <= 230 && s >= 10 && s <= 30) || s < 10;
            },
            constrainH: true, hRanges: [[210, 230]],
            constrainS: true, sRange: [0, 30],
            constrainL: false,
            // Two proximity modes: "blue" (constrained H+S) and "gray" (only S near 0)
            proximityMode: 'corporate'
        }
    ];

    // ── 4. Check exact matches ──
    var moods = [];
    for (var i = 0; i < moodRules.length; i++) {
        if (moodRules[i].check(h, s, l)) {
            moods.push(moodRules[i].name);
        }
    }

    // ── 5. If no exact match, use proximity scoring ──
    if (moods.length === 0) {
        var scores = [];
        for (var i = 0; i < moodRules.length; i++) {
            var rule = moodRules[i];
            var productScore = 1.0;
            var dimCount = 0;

            // H dimension score (multiplicative — any far dimension kills the score)
            if (rule.constrainH && rule.hRanges) {
                dimCount++;
                productScore *= dimensionScore(h, rule.hRanges);
            }

            // S dimension score
            if (rule.constrainS && rule.sRange) {
                dimCount++;
                productScore *= dimensionScore(s, [rule.sRange]);
            }

            // L dimension score
            if (rule.constrainL && rule.lRange) {
                dimCount++;
                productScore *= dimensionScore(l, [rule.lRange]);
            }

            // Special handling for Corporate: two proximity modes
            if (rule.proximityMode === 'corporate') {
                // Mode 1: Blue (H in [210,230], S in [0,30])
                var hScore = dimensionScore(h, [[210, 230]]);
                var sScore = dimensionScore(s, [[0, 30]]);
                var blueScore = hScore * sScore;

                // Mode 2: Gray (only S very low, no H constraint)
                var grayScore = dimensionScore(s, [[0, 10]]);

                productScore = Math.max(blueScore, grayScore);
            }

            scores.push({ name: rule.name, score: productScore });
        }

        // Sort by score descending
        scores.sort(function (a, b) { return b.score - a.score; });

        // Collect moods with score above threshold
        // Threshold: with 3 dimensions, each needs about 0.7 fit for product ≈ 0.34
        // With 2 dimensions, each needs about 0.55 fit for product ≈ 0.3
        var PROXIMITY_THRESHOLD = 0.3;
        for (var i = 0; i < scores.length; i++) {
            if (scores[i].score >= PROXIMITY_THRESHOLD) {
                moods.push(scores[i].name);
            }
        }
    }

    return moods;
}

/**
 * Calculates how close a value is to one or more allowed ranges using
 * Gaussian decay. Returns 1.0 if the value is inside any range, or a
 * smooth score (0.0 to 1.0) based on distance to the nearest range.
 *
 * Gaussian sigma is set to half the range width, providing a natural
 * falloff: at one full width away, score ≈ 0.135; at two widths, ≈ 0.018.
 *
 * @param {number} value - The value to evaluate.
 * @param {number[][]} ranges - Array of [min, max] ranges.
 * @returns {number} Score from 0.0 (far) to 1.0 (inside range).
 */
function dimensionScore(value, ranges) {
    var minDist = Infinity;
    var nearestWidth = 0;

    for (var i = 0; i < ranges.length; i++) {
        var min = ranges[i][0];
        var max = ranges[i][1];

        // Inside this range — perfect score
        if (value >= min && value <= max) {
            return 1.0;
        }

        // Distance to nearest boundary
        var dist = Math.min(Math.abs(value - min), Math.abs(value - max));
        if (dist < minDist) {
            minDist = dist;
            nearestWidth = max - min;
        }
    }

    if (nearestWidth <= 0) {
        return 0;
    }

    // Gaussian decay: sigma = half the range width
    // At dist = 0 (at boundary) → e^0 = 1
    // At dist = nearestWidth (one full width away) → e^(-2) ≈ 0.135
    var sigma = nearestWidth / 2;
    return Math.exp(-(minDist * minDist) / (2 * sigma * sigma));
}

/**
 * Generates the inverted color (negative) of an input.
 * Inversion is done channel by channel in RGB space: each channel (R, G, B)
 * is subtracted from 255, producing a "photographic negative" effect.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string} Inverted color in #rrggbb format.
 *
 * @example
 * generateInvertedColor('#ff0000'); // "#00ffff" — red becomes cyan
 * generateInvertedColor('black');   // "#ffffff" — black becomes white
 */
function generateInvertedColor(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return '#000000';
    }
    var rgb = hexToRgb(hex);
    return '#' +
        (255 - rgb.r).toString(16).padStart(2, '0') +
        (255 - rgb.g).toString(16).padStart(2, '0') +
        (255 - rgb.b).toString(16).padStart(2, '0');
}

/**
 * Generates the complementary color of an input — the opposite color on the color wheel (180° apart).
 * Preserves the saturation and lightness of the original color, changing only the hue.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string} Complementary color in #rrggbb format.
 *
 * @example
 * generateComplementary('#ff0000'); // "#00ffff" — red complements cyan
 * generateComplementary('#0000ff'); // "#ffff00" — blue complements yellow
 */
function generateComplementary(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return '#000000';
    }
    var hsl = hexToHsl(hex);
    return hslToHex(hsl.h + 180, hsl.s, hsl.l);
}

/**
 * Generates a triadic color scheme from an input.
 * Returns an array with 3 colors equidistant on the color wheel (120° apart each).
 * The first color is the generated color, the others are the two triadic colors.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array with 3 colors in #rrggbb format: [base, triadic 1, triadic 2].
 *
 * @example
 * generateTriadic('#ff0000');
 * // → ["#ff0000", "#00ff00", "#0000ff"] (RGB)
 */
function generateTriadic(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return ['#000000', '#000000', '#000000'];
    }
    var hsl = hexToHsl(hex);
    return [
        hex,
        hslToHex(hsl.h + 120, hsl.s, hsl.l),
        hslToHex(hsl.h + 240, hsl.s, hsl.l)
    ];
}

/**
 * Generates a square (tetradic) color scheme from an input.
 * Returns an array with 4 colors equidistant on the color wheel (90° apart each).
 * The first is the generated color, the rest are the three square scheme colors.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array with 4 colors in #rrggbb format: [base, 90°, 180°, 270°].
 *
 * @example
 * generateSquare('#ff0000');
 * // → ["#ff0000", "#ff7f00", "#00ffff", "#7f00ff"]
 */
function generateSquare(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return ['#000000', '#000000', '#000000', '#000000'];
    }
    var hsl = hexToHsl(hex);
    return [
        hex,
        hslToHex(hsl.h + 90, hsl.s, hsl.l),
        hslToHex(hsl.h + 180, hsl.s, hsl.l),
        hslToHex(hsl.h + 270, hsl.s, hsl.l)
    ];
}

/**
 * Generates a split-complementary color scheme from an input.
 * Returns an array with 3 colors: the base color and two colors adjacent to the complement
 * (30° before and 30° after the opposite, i.e., at 150° and 210° from the original color).
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array with 3 colors in #rrggbb format: [base, split 1, split 2].
 *
 * @example
 * generateSplitComplementary('#ff0000');
 * // → ["#ff0000", "#00ff7f", "#007fff"]
 */
function generateSplitComplementary(input) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return ['#000000', '#000000', '#000000'];
    }
    var hsl = hexToHsl(hex);
    return [
        hex,
        hslToHex(hsl.h + 150, hsl.s, hsl.l),
        hslToHex(hsl.h + 210, hsl.s, hsl.l)
    ];
}

/**
 * Generates a monochromatic color palette from an input.
 * The palette keeps the same hue (h) and saturation (s) as the original color,
 * varying only the lightness (l) in alternating fashion: one lighter,
 * one darker, another lighter, and so on.
 *
 * The first color of the palette is always the original generated color. The
 * light/dark priority depends on the initial color: if it is light (luminance > 0.5),
 * the next is dark; if it is dark, the next is light.
 *
 * The lightness spacing is automatically calculated to distribute colors
 * evenly between the extremes (0% and 100%), ensuring all colors are visually distinct.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @param {number} [count=5] - Number of colors in the palette (minimum 2, maximum 21).
 * @returns {string[]} Array with `count` colors in #rrggbb format.
 *
 * @example
 * generateMonochrome('#ff0000', 5);
 * // → ["#ff0000", "#ff6666", "#990000", "#ffb3b3", "#4d0000"]
 * //    (original, +light, +dark, ++light, ++dark)
 *
 * @example
 * generateMonochrome('gold', 3);
 * // → ["#ffd700", "#ffe066", "#b39800"]
 * //    (original, +light, +dark — gold is light, so next is dark)
 */
function generateMonochrome(input, count) {
    var hex = normalizeHex(generateColor(input));
    if (!hex) {
        return ['#000000'];
    }

    count = Math.max(2, Math.min(21, Math.floor(Number(count)) || 5));

    var hsl = hexToHsl(hex);
    var originalL = hsl.l;

    // ── Edge cases: black (l=0) or white (l=100) ──
    // Generate grayscale (saturation = 0) for a more natural palette
    if (originalL === 0 || originalL === 100) {
        var paletteGray = [];
        // Distribute count colors evenly between 0 and 100
        for (var gi = 0; gi < count; gi++) {
            var lVal = Math.round(100 * (count - 1 - gi) / (count - 1));
            paletteGray.push(hslToHex(0, 0, lVal));
        }
        return paletteGray;
    }

    // ── Generate palette with the original always near the center ──
    // The final palette will be sorted from lightest to darkest,
    // but the original color will always stay near the center (when possible).

    // How many variations on each side (excluding the original)
    var totalVariations = count - 1;
    var lightCount = Math.ceil(totalVariations / 2);
    var darkCount = Math.floor(totalVariations / 2);

    // If the original is very light, we give more variations to the dark side
    // If it is very dark, we give more to the light side
    // This ensures the original stays near the center
    if (originalL > 70 && lightCount > darkCount + 1) {
        lightCount--;
        darkCount++;
    } else if (originalL < 30 && darkCount > lightCount + 1) {
        darkCount--;
        lightCount++;
    }

    // Generate lightness values brighter than the original
    var lightTargets = [];
    for (var li = 1; li <= lightCount; li++) {
        var lVal = originalL + (100 - originalL) * (li / (lightCount + 1));
        lightTargets.push(Math.round(lVal));
    }

    // Generate lightness values darker than the original
    var darkTargets = [];
    for (var di = 1; di <= darkCount; di++) {
        var dVal = originalL * (1 - di / (darkCount + 1));
        darkTargets.push(Math.round(dVal));
    }

    // Build full array: lights + original + darks
    var allL = lightTargets.concat([originalL]).concat(darkTargets);

    // Sort from lightest (highest L) to darkest (lowest L)
    allL.sort(function (a, b) { return b - a; });

    // Ensure we have exactly count colors
    // (may have fewer if ranges are too narrow)
    while (allL.length < count) {
        // Find the largest gap and insert in the middle
        var maxGap = 0;
        var gapIdx = 0;
        for (var gi = 0; gi < allL.length - 1; gi++) {
            var gap = Math.abs(allL[gi] - allL[gi + 1]);
            if (gap > maxGap) {
                maxGap = gap;
                gapIdx = gi;
            }
        }
        var mid = Math.round((allL[gapIdx] + allL[gapIdx + 1]) / 2);
        allL.splice(gapIdx + 1, 0, mid);
    }

    // If it exceeded count, remove the extremes (lightest and darkest)
    // to keep the original in the center
    while (allL.length > count) {
        // Remove the lightest or darkest, whichever is farthest from the original
        var distLight = Math.abs(allL[0] - originalL);
        var distDark = Math.abs(allL[allL.length - 1] - originalL);
        if (distLight >= distDark) {
            allL.shift();
        } else {
            allL.pop();
        }
    }

    // Convert to hex
    var palette = [];
    for (var pi = 0; pi < allL.length; pi++) {
        palette.push(hslToHex(hsl.h, hsl.s, allL[pi]));
    }

    return palette;
}

/**
 * Generates a pair of colors where the first color is readable on top of the second, from an input value which can be a number, a string representing a color name, a hexadecimal code, or an RGB/RGBA format string. It attempts to interpret the input value and return the corresponding color in hexadecimal format. If the input is invalid or cannot be interpreted as a color, it generates a deterministic color based on the input text.
 * @param {*} input
 * @return {Array} An array containing two colors: the first is readable on top of the second, both in hexadecimal format.
 */
function generateReadableColor(input) {

    input = input || '';
    const color = generateColor(input);
    const hex = normalizeToHex(color);

    if (!hex) {
        return ['#000000', color];
    }

    const bgRgb = hexToRgb(hex);
    const bgLuminance = relativeLuminance(bgRgb.r, bgRgb.g, bgRgb.b);

    // ── WCAG contrast target ──
    // AA for normal text: 4.5:1 | AA for large text: 3:1 | AAA: 7:1
    const TARGET_CONTRAST = 4.5;

    // Contrast of white (L=1.0) and black (L=0.0) against the background
    const contrastWithWhite = (1.0 + 0.05) / (bgLuminance + 0.05);
    const contrastWithBlack = (bgLuminance + 0.05) / (0.0 + 0.05);

    // Choose the base color (white or black) that offers the HIGHEST contrast
    const useWhite = contrastWithWhite >= contrastWithBlack;
    const baseHex = useWhite ? '#FFFFFF' : '#000000';

    // ── Dynamic blend rate calculation (binary search) ──
    // Since luminance is not linear in sRGB space, blending in RGB
    // does not produce a luminance that is a linear combination of the
    // original and base luminances. Therefore, we use binary search to find
    // the smallest rate that reaches TARGET_CONTRAST.

    const MIN_RATIO = 0.5; // Minimum 50% of base color for visual harmony
    const bgRgbLocal = { r: bgRgb.r, g: bgRgb.g, b: bgRgb.b };

    // Test if the minimum is already sufficient
    let testColor = blendColors(baseHex, hex, MIN_RATIO);
    let testRgb = hexToRgb(testColor);
    let testContrast = contrastRatio(testRgb, bgRgbLocal);

    let ratio;
    if (testContrast >= TARGET_CONTRAST) {
        ratio = MIN_RATIO;
    } else {
        // Binary search: find the smallest rate that reaches the target contrast
        let low = MIN_RATIO;
        let high = 1.0;

        for (let i = 0; i < 20; i++) {
            const mid = (low + high) / 2;
            const midColor = blendColors(baseHex, hex, mid);
            const midRgb = hexToRgb(midColor);
            const midContrast = contrastRatio(midRgb, bgRgbLocal);

            if (midContrast >= TARGET_CONTRAST) {
                high = mid;
            } else {
                low = mid;
            }
        }
        ratio = high;
    }

    const textColor = blendColors(baseHex, hex, ratio);
    return [textColor, color];

    function blendColors(color1, color2, ratio) {
        const r1 = parseInt(color1.slice(1, 3), 16);
        const g1 = parseInt(color1.slice(3, 5), 16);
        const b1 = parseInt(color1.slice(5, 7), 16);

        const r2 = parseInt(color2.slice(1, 3), 16);
        const g2 = parseInt(color2.slice(3, 5), 16);
        const b2 = parseInt(color2.slice(5, 7), 16);

        const r = Math.round(r1 * ratio + r2 * (1 - ratio));
        const g = Math.round(g1 * ratio + g2 * (1 - ratio));
        const b = Math.round(b1 * ratio + b2 * (1 - ratio));

        return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    function normalizeToHex(value) {
        if (typeof value !== 'string') {
            return null;
        }

        const text = value.trim().toLowerCase();

        if (/^#[0-9a-f]{3}$/.test(text)) {
            return '#' + text.slice(1).split('').map(ch => ch + ch).join('');
        }

        if (/^#[0-9a-f]{6}$/.test(text)) {
            return text;
        }

        if (/^#[0-9a-f]{8}$/.test(text)) {
            return '#' + text.slice(1, 7);
        }

        if (/^black$/.test(text)) {
            return '#000000';
        }

        if (/^white$/.test(text)) {
            return '#ffffff';
        }

        return null;
    }

    function hexToRgb(hexValue) {
        return {
            r: parseInt(hexValue.slice(1, 3), 16),
            g: parseInt(hexValue.slice(3, 5), 16),
            b: parseInt(hexValue.slice(5, 7), 16)
        };
    }

    function contrastRatio(foreground, background) {
        const fgLuminance = relativeLuminance(foreground.r, foreground.g, foreground.b);
        const bgLuminance = relativeLuminance(background.r, background.g, background.b);
        const lighter = Math.max(fgLuminance, bgLuminance);
        const darker = Math.min(fgLuminance, bgLuminance);

        return (lighter + 0.05) / (darker + 0.05);
    }

    function relativeLuminance(rChannel, gChannel, bChannel) {
        const toLinear = (channel) => {
            const srgb = channel / 255;
            return srgb <= 0.03928
                ? srgb / 12.92
                : Math.pow((srgb + 0.055) / 1.055, 2.4);
        };

        const rLinear = toLinear(rChannel);
        const gLinear = toLinear(gChannel);
        const bLinear = toLinear(bChannel);

        return (0.2126 * rLinear) + (0.7152 * gLinear) + (0.0722 * bLinear);
    }

}

/**
 * Returns a paginated array of all colors from the internal table.
 *
 * @param {number} [pageNumber] - Page number (1-based). If omitted, returns all colors.
 * @param {number} [pageSize] - Number of items per page. Required if pageNumber is provided.
 * @returns {Object} Object in the format { items, pageNumber, pageCount, totalItems }.
 *
 * @example
 * // Returns all colors in a single page
 * listColors();
 *
 * @example
 * // Returns page 2 with 10 items per page
 * listColors(2, 10);
 */
function listColors(pageNumber, pageSize) {
    // Build a flat list: each name in the Color array becomes its own item
    var flatList = [];
    for (var i = 0; i < colorDatabase.length; i++) {
        var entry = colorDatabase[i];
        for (var j = 0; j < entry.Color.length; j++) {
            flatList.push({
                Color: entry.Color[j],
                Hexadecimal: entry.Hexadecimal
            });
        }
    }

    var totalItems = flatList.length;

    // If pageNumber was not provided, return everything (pageCount = 1)
    if (pageNumber === undefined || pageNumber === null) {
        return {
            items: flatList,
            pageNumber: 1,
            pageCount: 1,
            totalItems: totalItems
        };
    }

    // Basic parameter validation
    pageNumber = Math.max(1, Math.floor(Number(pageNumber)));
    pageSize = Math.max(1, Math.floor(Number(pageSize)));

    var pageCount = Math.ceil(totalItems / pageSize);
    var startIndex = (pageNumber - 1) * pageSize;
    var items = flatList.slice(startIndex, startIndex + pageSize);

    return {
        items: items,
        pageNumber: pageNumber,
        pageCount: pageCount,
        totalItems: totalItems
    };
}

/**
 * Returns the first matching color name for a given input.
 * Searches the database by exact hex match. If the color has multiple names,
 * returns the first one. If no exact match is found, returns null.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string|null} The first color name, or null if not found.
 *
 * @example
 * colorName("Absolute Zero"); // -> "Absolute Zero"
 * colorName(1);               // -> "Absolute Zero"
 * colorName("#0048BA");       // -> "Absolute Zero"
 * colorName("unknown");       // -> null
 */
function colorName(input) {
    var hex = resolveHex(input);
    if (!hex) return null;

    var normalizedHex = hex.toLowerCase();
    for (var i = 0; i < colorDatabase.length; i++) {
        if (colorDatabase[i].Hexadecimal.toLowerCase() === normalizedHex) {
            return colorDatabase[i].Color[0];
        }
    }
    return null;
}

/**
 * Returns all possible color names for a given input.
 * Searches the database by exact hex match. If the color has multiple
 * synonyms, returns the full array. If no exact match is found,
 * returns an empty array.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array of color names, or empty array if not found.
 *
 * @example
 * colorNames("Aqua");     // -> ["Aqua", "Cyan", "Spanish Sky Blue"]
 * colorNames("#00FFFF");  // -> ["Aqua", "Cyan", "Spanish Sky Blue"]
 * colorNames("unknown");  // -> []
 */
function colorNames(input) {
    var hex = resolveHex(input);
    if (!hex) return [];

    var normalizedHex = hex.toLowerCase();
    for (var i = 0; i < colorDatabase.length; i++) {
        if (colorDatabase[i].Hexadecimal.toLowerCase() === normalizedHex) {
            return colorDatabase[i].Color.slice();
        }
    }
    return [];
}

/**
 * Returns the name of the nearest color in the chromatic circle.
 * Works like colorName(), but instead of returning null when no exact
 * match is found, it finds the closest color in the database (by RGB
 * Euclidean distance) and returns its first name.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string|null} The first name of the nearest color, or null if database is empty.
 *
 * @example
 * closestName("#ff6348"); // -> "Tomato" (slightly different red, nearest match)
 * closestName("unknown"); // -> nearest color name in the database
 */
function closestName(input) {
    var hex = resolveHex(input);
    if (!hex) return null;

    // Try exact match first
    var exact = colorName(input);
    if (exact !== null) return exact;

    // Find the nearest color in the chromatic circle
    var nearest = findNearestColor(hex);
    return nearest ? nearest.Color[0] : null;
}

/**
 * Returns all names of the nearest color in the chromatic circle.
 * Works like colorNames(), but instead of returning an empty array when
 * no exact match is found, it finds the closest color in the database
 * (by RGB Euclidean distance) and returns all its names.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string[]} Array of names of the nearest color, or empty array if database is empty.
 *
 * @example
 * closestNames("#ff6348"); // -> ["Tomato"] (nearest match)
 * closestNames("unknown"); // -> names of the nearest color
 */
function closestNames(input) {
    var hex = resolveHex(input);
    if (!hex) return [];

    // Try exact match first
    var exact = colorNames(input);
    if (exact.length > 0) return exact;

    // Find the nearest color in the chromatic circle
    var nearest = findNearestColor(hex);
    return nearest ? nearest.Color.slice() : [];
}

/**
 * Resolves any input to a single hexadecimal color string.
 * If generateColor returns an array (because input was an array),
 * the first element is used.
 *
 * @param {*} input - Any value accepted by generateColor().
 * @returns {string|null} A hexadecimal color string (#rrggbb) or null.
 * @private
 */
function resolveHex(input) {
    var result = generateColor(input);
    if (Array.isArray(result)) {
        return result.length > 0 ? result[0] : null;
    }
    return typeof result === 'string' && result.charAt(0) === '#' ? result : null;
}

/**
 * Finds the nearest color in the database by RGB Euclidean distance.
 *
 * @param {string} hex - Target color in #rrggbb format.
 * @returns {Object|null} The closest colorDatabase entry, or null.
 * @private
 */
function findNearestColor(hex) {
    var targetRgb = hexToRgb(hex);
    var bestEntry = null;
    var bestDistance = Infinity;

    for (var i = 0; i < colorDatabase.length; i++) {
        var entry = colorDatabase[i];
        var entryHex = entry.Hexadecimal;

        // Skip if it is the exact same color (already checked by caller)
        if (entryHex.toLowerCase() === hex.toLowerCase()) continue;

        var entryRgb = hexToRgb(entryHex);
        var dr = targetRgb.r - entryRgb.r;
        var dg = targetRgb.g - entryRgb.g;
        var db = targetRgb.b - entryRgb.b;
        var distance = dr * dr + dg * dg + db * db;

        if (distance < bestDistance) {
            bestDistance = distance;
            bestEntry = entry;
        }
    }

    return bestEntry;
}

/**
 * Checks whether two colors are readable (accessible) for various types of color blindness,
 * simulating how the colors are perceived by a person with that condition and calculating
 * the WCAG 2.1 contrast ratio between the simulated perceptions.
 *
 * The simulation uses simplified Brettel/Vienot matrices applied to linearized sRGB values.
 *
 * @param {*} colorA - First color (any value accepted by generateColor()).
 * @param {*} colorB - Second color (any value accepted by generateColor()).
 * @param {string} type - Type of color blindness to simulate:
 *   "protanopia" (red-deficient), "deuteranopia" (green-deficient),
 *   "tritanopia" (blue-deficient), or "all" (tests all three types).
 * @returns {Object} Result object with readability information.
 *
 * @example
 * // Test specific type
 * isReadableForBlindness("#ff0000", "#00ff00", "protanopia");
 * // → { readable: false, contrast: 1.35, simulatedColorA: "#777777", simulatedColorB: "#777777" }
 *
 * @example
 * // Test all types
 * isReadableForBlindness("white", "black", "all");
 * // → { protanopia: {...}, deuteranopia: {...}, tritanopia: {...}, accessibleForAll: true }
 */
function isReadableForBlindness(colorA, colorB, type) {
    // ── Validate type parameter ──
    var VALID_TYPES = ['protanopia', 'deuteranopia', 'tritanopia', 'all'];
    if (VALID_TYPES.indexOf(type) === -1) {
        type = 'all';
    }

    // ── Step 0: Resolve both inputs to valid hex colors ──
    var hexA = normalizeHex(generateColor(colorA));
    var hexB = normalizeHex(generateColor(colorB));

    if (!hexA || !hexB) {
        var fallback = {
            readable: false,
            contrast: 1,
            simulatedColorA: '#000000',
            simulatedColorB: '#000000'
        };
        if (type === 'all') {
            return {
                protanopia: fallback,
                deuteranopia: fallback,
                tritanopia: fallback,
                accessibleForAll: false
            };
        }
        return fallback;
    }

    // ── Parse RGB values (0–255) ──
    var rgbA = hexToRgb(hexA);
    var rgbB = hexToRgb(hexB);

    // ── Step 1: Linearize sRGB → Linear RGB ──
    // Uses the standard sRGB linearization formula with threshold 0.04045
    function linearize(channel) {
        var srgb = channel / 255;
        if (srgb <= 0.04045) {
            return srgb / 12.92;
        }
        return Math.pow((srgb + 0.055) / 1.055, 2.4);
    }

    // ── Step 3 helper: Delinearize Linear RGB → sRGB ──
    function delinearize(channel) {
        if (channel <= 0.0031308) {
            return channel * 12.92;
        }
        return 1.055 * Math.pow(channel, 1 / 2.4) - 0.055;
    }

    // ── Step 2 & 3: Simulate color blindness for a single type ──
    // Returns { r, g, b } in 0–255 range (sRGB, clamped)
    function simulateColorBlindness(r, g, b, cvdType) {
        // Linearize
        var rLin = linearize(r);
        var gLin = linearize(g);
        var bLin = linearize(b);

        var rSim, gSim, bSim;

        // Apply the simplified Brettel/Vienot matrices
        if (cvdType === 'protanopia') {
            // Protanopia: absent L-cones (red-deficient)
            rSim = 0.56667 * rLin + 0.43333 * gLin + 0.0 * bLin;
            gSim = 0.55833 * rLin + 0.44167 * gLin + 0.0 * bLin;
            bSim = 0.0 * rLin + 0.24167 * gLin + 0.75833 * bLin;
        } else if (cvdType === 'deuteranopia') {
            // Deuteranopia: absent M-cones (green-deficient)
            rSim = 0.625 * rLin + 0.375 * gLin + 0.0 * bLin;
            gSim = 0.70 * rLin + 0.30 * gLin + 0.0 * bLin;
            bSim = 0.0 * rLin + 0.30 * gLin + 0.70 * bLin;
        } else if (cvdType === 'tritanopia') {
            // Tritanopia: absent S-cones (blue-deficient)
            rSim = 0.95 * rLin + 0.05 * gLin + 0.0 * bLin;
            gSim = 0.0 * rLin + 0.43333 * gLin + 0.56667 * bLin;
            bSim = 0.0 * rLin + 0.475 * gLin + 0.525 * bLin;
        }

        // Delinearize (return to sRGB)
        var rOut = delinearize(rSim);
        var gOut = delinearize(gSim);
        var bOut = delinearize(bSim);

        // Convert to 0–255 range and clamp
        return {
            r: Math.max(0, Math.min(255, Math.round(rOut * 255))),
            g: Math.max(0, Math.min(255, Math.round(gOut * 255))),
            b: Math.max(0, Math.min(255, Math.round(bOut * 255)))
        };
    }

    // ── Step 4 helper: Calculate relative luminance (WCAG 2.1) ──
    // The WCAG formula requires linear RGB values, so we linearize the sRGB again
    function simulatedLuminance(r, g, b) {
        var toLin = function (ch) {
            var srgb = ch / 255;
            return srgb <= 0.04045 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
        };
        return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
    }

    // ── Step 4 helper: Calculate WCAG contrast ratio ──
    function calculateContrast(simA, simB) {
        var lumA = simulatedLuminance(simA.r, simA.g, simA.b);
        var lumB = simulatedLuminance(simB.r, simB.g, simB.b);
        var lighter = Math.max(lumA, lumB);
        var darker = Math.min(lumA, lumB);
        return (lighter + 0.05) / (darker + 0.05);
    }

    // ── Helper: Convert {r, g, b} to hex string ──
    function rgbToHex(r, g, b) {
        return '#' +
            r.toString(16).padStart(2, '0') +
            g.toString(16).padStart(2, '0') +
            b.toString(16).padStart(2, '0');
    }

    // ── Evaluate a single CVD type ──
    function evaluateType(cvdType) {
        var simA = simulateColorBlindness(rgbA.r, rgbA.g, rgbA.b, cvdType);
        var simB = simulateColorBlindness(rgbB.r, rgbB.g, rgbB.b, cvdType);
        var contrast = calculateContrast(simA, simB);

        return {
            readable: contrast >= 4.5,
            contrast: parseFloat(contrast.toFixed(2)),
            simulatedColorA: rgbToHex(simA.r, simA.g, simA.b),
            simulatedColorB: rgbToHex(simB.r, simB.g, simB.b)
        };
    }

    // ── Step 5: Return results ──
    if (type === 'all') {
        var resultProtanopia = evaluateType('protanopia');
        var resultDeuteranopia = evaluateType('deuteranopia');
        var resultTritanopia = evaluateType('tritanopia');

        return {
            protanopia: resultProtanopia,
            deuteranopia: resultDeuteranopia,
            tritanopia: resultTritanopia,
            accessibleForAll: resultProtanopia.readable &&
                resultDeuteranopia.readable &&
                resultTritanopia.readable
        };
    }

    return evaluateType(type);
}