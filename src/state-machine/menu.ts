export type MenuStateProps = "open" | "closed";
const MenuStateMachine = (state: MenuStateProps) => {
  let stateChangedTo: MenuStateProps = "open";

  switch (state) {
    case "closed":
      stateChangedTo = "open";
      break;
    case "open":
      stateChangedTo = "closed";
      break;
    default:
      stateChangedTo = "closed";
  }

  return stateChangedTo;
};

export { MenuStateMachine };
