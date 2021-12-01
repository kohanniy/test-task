import { merge } from 'lodash';
import CssBaseline from './CssBaseline';
import Card from './Card';

export default function ComponentsOverrides(theme) {
  return merge(CssBaseline(), Card(theme));
}
