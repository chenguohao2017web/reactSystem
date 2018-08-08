import React from 'react'
import './index.css'
export default class NavSide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: '',
      menu: [{
        name: '控制台',
        child: [],
        show: false
      }, {
        name: '进口管理',
        show: false,
        child: [{
          name: '进口合同'
        }, {
          name: '大船合同'
        }]
      }, {
        show: false,
        name: '购销管理',
        child: [{
          name: '购销合同'
        }, {
          name: '购销增标'
        }]
      }, {
        show: false,
        name: '关检管理',
        child: [{
          name: '新增关检'
        }, {
          name: '流程新增'
        }]
      }, {
        show: false,
        name: '库存管理',
        child: [{
          name: '库存流量'
        }, {
          name: '仓库操作'
        }]
      }]
    }
  }
  handleItemClick(index) {
    /**
     * 展开或者收起二级菜单
     */
    const menu = [...this.state.menu]
    menu[index].show = !menu[index].show
    this.setState({
      menu: menu
    })
  }
  hanldeInnerClick(e) {
    e.stopPropagation()
  }
  render() {
    return (
      <ul className="layui-nav layui-nav-tree layui-nav-side" id="nav-side">
        {
          this.state.menu.map((item, index) => {
            return (
              <li className={['layui-nav-item', item.show && ' layui-nav-itemed'].join(' ')} onClick={this.handleItemClick.bind(this, index)} key={index}>
                <a>{item.name}</a>
                <dl className="layui-nav-child">
                  {
                    item.child.map((inner, index) => {
                      return (
                        <dd key={index} onClick={this.hanldeInnerClick.bind(this)}><a href="">{inner.name}</a></dd>
                      )
                    })
                  }
                </dl>
              </li>
            )
          })
        }
      </ul>
    )
  }
}