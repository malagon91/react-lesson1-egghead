import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'monospace'
  },
  'header': {
    'display': 'block',
    'height': [{ 'unit': 'vh', 'value': 5 }],
    'overflow': 'auto',
    'backgroundColor': 'pink',
    'color': 'red',
    'fontSize': [{ 'unit': 'px', 'value': 28 }]
  },
  'container': {
    'height': [{ 'unit': 'vh', 'value': 95 }],
    'display': 'flex'
  },
  'pre': {
    'backgroundColor': '#f8f8f8'
  },
  'pre': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'fontFamily': 'monospace',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': '#222'
  },
  'textarea': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'fontFamily': 'monospace',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': '#222'
  },
  'textarea:focus': {
    'outline': '0'
  }
});
