import { View, Text, StyleSheet, type TextStyle } from "react-native";

interface Props {
  hiki: string;
  bang: boolean;
  style?: TextStyle;
}

const Hello = (props: Props): JSX.Element => {
  const { hiki, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {hiki}
        {bang ? "!" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
