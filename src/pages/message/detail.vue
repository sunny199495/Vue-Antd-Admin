<template>
  <div>
    <notice-detail-model :item="messageInfo" />
  </div>
</template>

<script>
import NoticeDetailModel from "@/components/Message/NoticeDetailModel";
import { msgDetail } from "@/services/test";
export default {
  components: { NoticeDetailModel },
  data() {
    return {
      messageInfo: {
        templateCode: 2,
        templateValue: { msgId: "", msgCode: "", title: { value: "", place: "", level: 1 }, body: { value: "", map: "", picture: "" }, source: { name: "", image: "" }, time: "" },
      },
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      msgDetail().then((res) => {
        if (res.data.code == 200) {
          this.messageInfo = res.data.data;
        }
      });
    },
  },
};
</script>
