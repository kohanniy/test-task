import { merge } from 'lodash';
import CssBaseline from './CssBaseline';
import Card from './Card';
import Button from './Button';

export default function ComponentsOverrides(theme) {
  return merge(CssBaseline(), Card(theme), Button(theme));
}
