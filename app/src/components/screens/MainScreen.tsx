import React, { FC } from "react";
import {
  Button,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
} from "@blueprintjs/core";

import styles from "./MainScreen.module.css";

interface IProps {}

export const MainScreen: FC<IProps> = () => {
  return (
    <div className={styles.Root}>
      <Card elevation={Elevation.TWO}>
        <FormGroup
          helperText="Helper text with details..."
          label="Label A"
          labelFor="text-input"
        >
          <InputGroup id="text-input" placeholder="Placeholder text" />
          <InputGroup id="text-input" placeholder="Placeholder text" />
        </FormGroup>
      </Card>
    </div>
  );
};
