import { merge } from 'lodash';
import CssBaseline from './CssBaseline';

export default function ComponentsOverrides(theme) {
  return merge(CssBaseline());
}
