import React from 'react'
import { Field, reduxForm } from 'redux-form';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
                     input: { value: omitValue, onChange, onBlur, ...inputProps },
                     meta: omitMeta,
                     ...props
                   }) => {
  return (
          <input
              onChange={adaptFileEventToValue(onChange)}
              onBlur={adaptFileEventToValue(onBlur)}
              type="file"
              {...inputProps}
              {...props}
          />
  );
};

export default FileInput;