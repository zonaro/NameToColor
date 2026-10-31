import 'package:flutter/material.dart';

/// DOM-equivalent widgets for NameToColor (separate file, as requested).
class NameToColorWidget extends StatelessWidget {
  final String input;
  final Color? color;
  const NameToColorWidget({Key? key, required this.input, this.color}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color ?? Colors.blue,
      padding: const EdgeInsets.all(12),
      child: Text(input, style: const TextStyle(color: Colors.white)),
    );
  }
}

class NameToColorText extends StatelessWidget {
  final String text;
  final TextStyle? style;
  const NameToColorText({Key? key, required this.text, this.style}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(text, style: style ?? const TextStyle(fontSize: 16));
  }
}
