var config = {
  orgs: [
    {
      _id: "1",
      orgName: "绘本学堂",
      form: {
        name: "姓名",
        date: "日期",
        sections: [
          {
            sectionName: "活动表现",
            items: [
              {
                itemName: "参与情况",
                type: "radio",
                options: [
                  "积极",
                  "需引导",
                  "需努力"
                ]
              },
              {
                itemName: "语言发展能力",
                type: "radio",
                options: [
                  "优",
                  "良",
                  "加油"
                ]
              }
            ]
          },
          {
            sectionName: "生活状况",
            items: [
              {
                itemName: "晨检情况",
                type: "input"
              },
              {
                itemName: "体温",
                type: "input"
              },
              {
                itemName: "入园礼仪",
                type: "radio",
                options: [
                  "主动跟老师问好",
                  "在引导下和老师问好",
                  "需努力"
                ]
              },
              {
                itemName: "饮水情况",
                type: "radio",
                options: [
                  "独立接水饮水",
                  "在引导下",
                  "需老师帮助"
                ]
              },
              {
                itemName: "饮水次数",
                type: "noValue",
                childItems: [
                  {
                    itemName: "上午",
                    type: "input"
                  },
                  {
                    itemName: "下午",
                    type: "input"
                  },
                ]
              },
              {
                itemName: "如厕情况",
                type: "radio",
                options: [
                  "有",
                  "无"
                ]
              },
              {
                itemName: "小便",
                type: "noValue",
                childItems: [
                  {
                    itemName: "上午",
                    type: "input"
                  },
                  {
                    itemName: "下午",
                    type: "input"
                  },
                ]
              },
              {
                itemName: "大便",
                type: "radio",
                options: [
                  "独立大便",
                  "在引导下完成",
                  "需老师帮助"
                ]
              },
              {
                itemName: "进餐情况",
                type: "noValue",
                childItems: [
                  {
                    itemName: "上午点心",
                    type: "input"
                  },
                  {
                    itemName: "午餐情况",
                    type: "input"
                  },
                  {
                    itemName: "下午担心",
                    type: "input"
                  },
                ]
              },
              {
                itemName: "午睡情况",
                type: "input"
              },
              {
                itemName: "下午体温",
                type: "input"
              },
              {
                itemName: "情绪",
                type: "input"
              }
            ]
          },
          {
            sectionName: "小组活动",
            items: [
              {
                itemName: "社交能力",
                type: "radio",
                options: [
                  "主动与同伴交流",
                  "需引导",
                  "加油"
                ]
              },
              {
                itemName: "规则意识",
                type: "radio",
                options: [
                  "遵守规则",
                  "需引导",
                  "加油"
                ]
              },
              {
                itemName: "任务意识",
                type: "radio",
                options: [
                  "根据要求完成任务",
                  "需引导",
                  "加油"
                ]
              }
            ]
          },
          {
            sectionName: "老师的话",
            items: [
            ]
          },
          {
            sectionName: "家长反馈",
            items: [
            ]
          }
        ]
      }
    }
  ]
}
module.exports = config;