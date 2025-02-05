import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

  container: {
    backgroundColor: "#717171",
    marginBottom: 30,
    padding: 14,
    borderRadius: 4
  },
  text: {
    fontWeight: "500",
    color: "#ffffff"
  },
  buttons: {
    position: "absolute",
    bottom: -18,
    flexDirection: "row",
    right: 0,
    zIndex: 99,
    gap: 8
  },
  butonDelete: {
    backgroundColor: "#ef4444",
    padding: 6,
    borderRadius: 99
  },
  buttonCompleted: {
    backgroundColor: "#22c55e",
    padding: 6,
    borderRadius: 99
  }
})