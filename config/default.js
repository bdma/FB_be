var config = {
  orgs: [
    {
      orgId: "1",
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
  ],
  feedback: {
    orgId: "1",
    orgName: "绘本学堂",
    memberId: "1",
    memberName: "张宝宝",
    date: "2017-06-01",
    sections: [
      {
        sectionName: "活动表现",
        items: [
          {
            itemName: "参与情况",
            itemValue: "积极",
            type: "radio",
            options: [
              "积极",
              "需引导",
              "需努力"
            ]
          },
          {
            itemName: "语言发展能力",
            itemValue: "优",
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
            itemValue: "正常",
            type: "input"
          },
          {
            itemName: "体温",
            itemValue: "36.5",
            type: "input"
          },
          {
            itemName: "入园礼仪",
            itemValue: "主动跟老师问好",
            type: "radio",
            options: [
              "主动跟老师问好",
              "在引导下和老师问好",
              "需努力"
            ]
          },
          {
            itemName: "饮水情况",
            itemValue: "独立接水饮水",
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
                itemValue: "2",
                type: "input"
              },
              {
                itemName: "下午",
                itemValue: "3",
                type: "input"
              },
            ]
          },
          {
            itemName: "如厕情况",
            itemValue: "有",
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
                itemValue: "2",
                type: "input"
              },
              {
                itemName: "下午",
                itemValue: "4",
                type: "input"
              },
            ]
          },
          {
            itemName: "大便",
            itemValue: "独立大便",
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
                itemValue: "吃光光",
                type: "input"
              },
              {
                itemName: "午餐情况",
                itemValue: "吃光光",
                type: "input"
              },
              {
                itemName: "下午点心",
                itemValue: "吃光光",
                type: "input"
              },
            ]
          },
          {
            itemName: "午睡情况",
            itemValue: "睡的好",
            type: "input"
          },
          {
            itemName: "下午体温",
            itemValue: "36.5",
            type: "input"
          },
          {
            itemName: "情绪",
            itemValue: "情绪好",
            type: "input"
          }
        ]
      },
      {
        sectionName: "小组活动",
        items: [
          {
            itemName: "社交能力",
            itemValue: "主动与同伴交流",
            type: "radio",
            options: [
              "主动与同伴交流",
              "需引导",
              "加油"
            ]
          },
          {
            itemName: "规则意识",
            itemValue: "遵守规则",
            type: "radio",
            options: [
              "遵守规则",
              "需引导",
              "加油"
            ]
          },
          {
            itemName: "任务意识",
            itemValue: "根据要求完成任务",
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
        itemValue: "4部分，1，进步的地方，2，还需努力的，3，回应家长上次的要求，4期许家长配合哪些事项",
        items: [
        ]
      },
      {
        sectionName: "家长反馈",
        itemValue: "谢谢老师！正在努力做到 无条件接纳宝宝，不是因为其聪明，勇敢等好品质，而是无条件接纳，最大程度的给予其安全感",
        items: [
        ]
      }
    ]
  }
}
module.exports = config;