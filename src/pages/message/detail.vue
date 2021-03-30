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
        msgId: "437128537104381278302178432",
        title: {
          place: "国家软件园摩羯座",
          level: 1,
        },
        source: {
          name: "安全管家",
          image: "https://img95.699pic.com/photo/50061/6284.jpg_wh300.jpg",
        },
        time: "2021/03/29 09:30:00",
      },
    };
  },
};
</script>
