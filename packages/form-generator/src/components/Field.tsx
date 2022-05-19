import invariant from 'invariant';
import React, { useMemo } from 'react';
import useFormContext from '../hooks/useFormContext';
import { FormStoreProps, ExtractProps } from '../types';
import usePrevious from 'adc-component/utils/src/usePrevious';
import { Select } from 'adc-component/components';
import { Merge } from 'adc-component/utils/src/merge';
const fieldNames: Array<keyof FormStoreProps<any>> = [
  'touched',
  'values',
  'errors',
  'validating',
];

function Field<C extends React.FC<any>>({
  name,
  render,
  as,
  ...rest
}: {
  name: string;
  render?: any;
  as: C;
} & ExtractProps<C>) {
  const Component = as;
  const { state, dispatch } = useFormContext();

  const fieldValues = fieldNames.map((field) => state[field][name]);
  const prev = usePrevious(fieldValues);

  const isDirty = fieldValues.some((val, i) => {
    if (!prev) return true;
    return val !== prev[i];
  });

  if (!Component) {
    invariant(true, 'you need to provide a component.');
    return null;
  }

  console.log('render field', isDirty);

  const renderResult = useMemo(() => {
    return <Component {...rest}></Component>;
  }, [isDirty]);

  return renderResult;
}

export default Field;
