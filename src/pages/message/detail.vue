<template>
  <div>
    <notice-detail-model :item="messageInfo" />
  </div>
</template>

<script>
import NoticeDetailModel from "@/components/Message/NoticeDetailModel";
export default {
  components: { NoticeDetailModel },
  data() {
    return {
      messageInfo: {
        templateCode: 2,
        templateValue: {
          msgId: "473821975891709582",
          msgCode: "0010000001",
          title: {
            value: "国家软件园摩羯座发生一级告警，请尽快处理！",
            place: "国家软件园摩羯座",
            level: 1,
          },
          body: {
            value: "国家软件园摩羯座发生一级告警，请尽快处理，及时上报处理结果！",
            map: "120.299, 31.568",
            picture: "https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg, https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg, https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg, https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg, https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg, https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg",
          },
          source: {
            name: "安全管家",
            image: "https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg",
          },
          time: "2021/03/29 09:30:00",
        },
      },
    };
  },
};
</script>
