import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default class NavSide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: '',
      menu: [{
        name: '控制台',
        child: [],
        show: false,
        linkUrl: '/control'
      }, {
        name: '进口管理',
        show: false,
        child: [{
          name: '合同管理',
          linkUrl: '/assocControl/all'
        }, {
          name: '大船管理',
          linkUrl: '/assocControl/shop'
        }]
      }, {
        show: false,
        name: '购销管理',
        child: [{
          name: '购销合同管理'
        }]
      }, {
        show: false,
        name: '关检管理',
        child: [{
          name: '初审任务'
        }, {
          name: '许可证管理'
        }, {
          name: '流向任务'
        }, {
          name: '流向管理'
        }, {
          name: '报关管理'
        }]
      }, {
        show: false,
        name: '库存管理',
        child: [{
          name: '入库任务'
        }, {
          name: '入库管理'
        }, {
          name: '出库流水'
        }]
      }, {
        show: false,
        name: '订单管理',
        child: [{
          name: '委托订单管理'
        }]
      }, {
        show: false,
        name: '财务管理',
        child: [{
          name: '订单审核管理'
        }]
      }, {
        show: false,
        name: '机构管理',
        child: [{
          name: '供应商管理'
        }, {
          name: '集团管理'
        }, {
          name: '客户管理'
        }, {
          name: '码头管理'
        },]
      }, {
        show: false,
        name: '统计报表',
        child: [{
          name: '入库损耗报表'
        }, {
          name: '出库损耗报表'
        }, {
          name: '库存统计'
        }, {
          name: '码头库存统计表'
        }]
      }, {
        show: false,
        name: '系统设置',
        child: [{
          name: '系统用户管理'
        }, {
          name: '系统角色管理'
        }, {
          name: '系统用户权限管理'
        }, {
          name: '部门管理'
        }, {
          name: '邮箱设置'
        }, {
          name: '操作日志'
        }]
      }]
    }
  }
  handleItemClick(index) {
    /**
     * 展开或者收起二级菜单 并且 派发一个单层菜单路由跳转
     */
    const menu = [...this.state.menu]
    menu[index].show = !menu[index].show
    this.setState({
      menu: menu
    })
    if(menu[index].linkUrl) {
      this.props.routerPush(menu[index].linkUrl)
    }
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
              <li className={['layui-nav-item', item.show && 'layui-nav-itemed'].join(' ')} onClick={this.handleItemClick.bind(this, index)} key={index}>
                <a>{item.name}</a>
                <dl className="layui-nav-child">
                  {
                    item.child.map((inner, index) => {
                      return (
                        <dd key={index} onClick={this.hanldeInnerClick.bind(this)}>
                          {
                            inner.linkUrl ?
                              <NavLink to={inner.linkUrl}>{inner.name}</NavLink>
                              :
                              <a href="">{inner.name}</a>
                          }
                        </dd>
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