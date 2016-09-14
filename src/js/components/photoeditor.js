import React from 'react';

import './photoeditor.scss';
import loadImage from 'blueimp-load-image';

class PhotoEditor extends React.Component {

  state = {
    file: this.props.file,
    base64: null,
    name: null,
    width: 1366,
    height: 1366,
  }

  componentWillMount() {
    if (this.props.file) {
      loadImage.parseMetaData(this.props.file, (data) => {
        const orientation = data.exif ? (data.exif.get('Orientation')) : 1;
        this.loadImage(this.props.file, orientation);
      });
    }
  }

  componentWillReceiveProps(props) {
    if (props.file) {
      loadImage.parseMetaData(props.file, (data) => {
        const orientation = data.exif ? (data.exif.get('Orientation')) : 1;
        this.loadImage(props.file, orientation);
      });
    }
  }

  handleRotateLeft = () => {
    this.loadImage(this.state.file, 5);
  }

  handleRotateRight = () => {
    this.loadImage(this.state.file, 6);
  }

  loadImage = (file, orientation) => {
      loadImage(file, (canvas) => {
        const base64 = canvas.toDataURL();
        this.setState({ file: file, base64: base64, name: file.name });
      },
      {
        maxWidth: this.state.width,
        maxHeight: this.state.height,
        contain: true,
        orientation: orientation,
      });
  }

  renderCanvas = () => {
    return (<div>{this.state.image}</div>)
  }

  render() {
    return (
      <div className="photoeditor">
        <nav>
          {this.state.name}
          <div onMouseUp={this.handleRotateLeft}><i className="material-icons">rotate_left</i></div>
          <div onMouseUp={this.handleRotateRight}><i className="material-icons">rotate_right</i></div>
        </nav>
        <div className="container">
          <img src={this.state.base64} width="100%"/>
        </div>
      </div>
    )
  }
}

export default PhotoEditor;
