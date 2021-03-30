let amapKey = '0c259c1d0098899071022ac7f1eefb32'
let amapVersion = '1.4.15'
let _createScript = (url) => {
  var tmp = document.createElement('script')
  tmp.src = url
  document.head.appendChild(tmp)
}

export default () => {
  return new Promise((resolve) => {
    if (!window.AMap) { //判断window下有没有AMap对象，再判断是否引入cdn地图
      _createScript(`//webapi.amap.com/maps?v=${amapVersion}&key=${amapKey}.Key&callback=aMapInitCallback`)
      window.aMapInitCallback = () => {
        _createScript('//webapi.amap.com/ui/1.0/main.js?v=1.0.11&callback=amapUiCallback')
        // 创建定时器 当AMapUI有值的时候 清除定时器 并resolve
        let interval = setInterval(() => {
          if (window.AMapUI) {
            clearInterval(interval)
            resolve(window.AMap)
          }
        }, 50)
      }
    } else resolve(window.AMap)
  })
}
