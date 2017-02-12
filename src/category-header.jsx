import React, {PropTypes, Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class CategoryHeader extends Component {
  static propTypes = {
    category: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    headingDecoration: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {category, emojis, headingDecoration, onChange, style} = this.props;

    return (
      <div className="emoji-category-header" style={style}>
        <h2 className="emoji-category-title">
          {category.title}
        </h2>
        <div className="emoji-category-heading-decoration">
          {headingDecoration}
        </div>
      </div>
    );
  }
}
