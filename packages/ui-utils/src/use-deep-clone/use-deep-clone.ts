import { useState } from "react";
import { cloneDeep, isEqual } from "lodash";

const useDeepClone = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const setDeepCloneValue = (newValue: T) => {
    if (!isEqual(value, newValue)) {
      setValue(newValue);
    }
  };

  return [cloneDeep(value), setDeepCloneValue] as const;
};

export default useDeepClone;
