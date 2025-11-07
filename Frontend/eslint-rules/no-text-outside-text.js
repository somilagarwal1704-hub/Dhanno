module.exports = {
  rules: {
    "no-text-outside-text": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Disallow raw text outside of <Text> component in React Native",
        },
        schema: [],
      },
      create(context) {
        return {
          JSXElement(node) {
            const openingElement = node.openingElement;
            const name =
              openingElement.name.type === "JSXIdentifier"
                ? openingElement.name.name
                : null;

            if (name === "Text") return; // ✅ Text inside <Text> is allowed

            node.children.forEach((child) => {
              if (child.type === "JSXText" && child.value.trim() !== "") {
                context.report({
                  node: child,
                  message:
                    "Raw text must be inside a <Text> component in React Native.",
                });
              }
            });
          },
        };
      },
    },
  },
};
