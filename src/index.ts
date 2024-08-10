const characters = {
  verticalLine: "│",
  horizontalLine: "─",
  bottomLeftCorner: "└",
};

export const prettierTree = <T>(
  node: T,
  getValue: (node: T) => Object,
  getChildren: (node: T) => T[],
  config?: {
    lengthOfEdge?: number;
  }
) => {
  const lengthOfEdge = config?.lengthOfEdge ?? 4;
  let txt = getValue(node).toString();
  const children = getChildren(node);
  for (let i = 0; i < children.length; i++) {
    const innerNode = prettierTree(children[i], getValue, getChildren, config).split(
      "\n"
    );
    const root = innerNode.shift();
    const arrow =
      i === children.length - 1
        ? characters.bottomLeftCorner
        : characters.verticalLine;
    txt += `\n${arrow}${characters.horizontalLine.repeat(
      lengthOfEdge
    )} ${root}`;
    innerNode.forEach((val) => {
      txt += `\n${
        i !== children.length - 1 ? characters.verticalLine : " "
      }${" ".repeat(lengthOfEdge)} ${val}`;
    });
  }
  return txt;
};
