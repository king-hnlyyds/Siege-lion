// 获取dom
let studentList = document.querySelector('#studentList')
//获取多个按钮dom
let btnTab = document.querySelector('#btnTab')
let btnSort = document.querySelector('#btnSort')
let btnFilter = document.querySelector('#btnFilter')
let btnScore = document.querySelector('#btnScore')
let btnSome = document.querySelector('#btnSome')
let btnEvery = document.querySelector('#btnEvery')
let btnMap = document.querySelector('#btnMap')
let btnFind = document.querySelector('#btnFind')

// 准备数据
const list = [
      {
      id: 03,
      name: '孙尚香',
      age: 16,
      hob: 'dance',
      score: 59
}, 
{
      id: 01,
      name: '刘玄德',
      age: 22,
      hob: '跑路',
      score: 86
}, 
{
      id: 06,
      name: '赵子龙',
      age: 21,
      hob: '骑马',
      score: 82
}, 
{
      id: 04,
      name: '曹孟德',
      age: 22,
      hob: '二乔',
      score: 88
}, 
{
      id: 05,
      name: '吕奉先',
      age: 21,
      hob: '勾栏听曲',
      score: 80
}, 
{
      id: 02,
      name: '周公瑾',
      age: 17,
      hob: '小乔',
      score: 85
}
]

// 封装渲染方法
function render(data) {
      //1.获取数据数组

      // 2.定义一个空的模板字符串
      let HTML = ''
      // 3.遍历数据拼接模板字符串
      data.forEach(function (item) {
            HTML +=
                  `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.hob}</td>
            <td>${item.score}</td>
        </tr>
        `
      })
      // 指定父元素使用innerHTML 渲染 resultHTML
      studentList.innerHTML = HTML
}
render(list)

// 点击排序按钮
btnSort.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'
      let result = list.sort(function (a, b) {
            return a.id - b.id
      })
      console.log(result);
      // 渲染新数组
      render(result)
})

// 筛选年龄
btnFilter.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'
      let result = list.filter(function (item) {
            return item.age > 18
      })
      console.log(result);

      render(result)

})
//筛选分数
btnScore.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'
      let result = list.filter(function (item) {
            return item.score >=85
      })
      console.log(result);

      render(result)

})
// 是否有不及格
btnSome.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'

      let result = list.some(function (item) {
            return item.score < 60
      })
      console.log(result); //是证明有, 如果不是证明没有
     
      alert(result ? '是,有不及格' : '没有不及格的哦')
})

// 是否所有年龄都大于18 every
btnEvery.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'

      let result = list.every(function (item) {
            return item.age > 18
      })
      console.log(result); //是证明有, 如果不是证明没有
      alert(result ? '是,,都满18岁' : '否,有小于18岁的哦')
})


// 所有年龄+1 map
btnMap.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'
      let result = list.map(function (item) {
            item.age += 1
            return item
      })
      console.log(result); //是证明有, 如果不是证明没有
      render(result)
})

// 第一个分数大于80的 find
btnFind.addEventListener('click', function () {
      btnTab.innerText = '筛选结果如下'
      let result = list.find(function (item) {
            return item.score >= 80
      })
      console.log(result); //是证明有, 如果不是证明没有
      // 告诉我们第一个大于80的
      // alert(result.name)
      render([result])   // 加中括号 数组转换成对象渲染到页面
      console.log([result]);
})

//形参的选择   item ,ele, el,element,v  少用a,b