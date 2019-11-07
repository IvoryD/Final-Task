<template>

    <div class="separation comment">

        <div class="comment-separation comment-head">
            <div class="author">
                <img class="author-separation author-avatar" :src=comment.avatar alt="">
                <h3 class="author-separation">{{comment.name}}</h3>
            </div>

            <div class="comment-date">{{comment.date | formatDate}}</div>
        </div>

        <p class="comment-separation commentary">{{comment.text}}</p>

        <div class="container-button">
            <DeleteButton></DeleteButton>
        </div>

        </div>

</template>

<script>

import DeleteButton from "@/components/DeleteButton.vue";
export default {
    components:{
        DeleteButton
    },

    props: {
        comment: Object,
        },
    };

</script>

<style lang="scss" scoped>
h2{
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
}

p{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
}

.comment-head{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #888888;
}

.author{
    display: flex;
    align-items: center;

    &-avatar{
        height: 38px;
        width: 38px;
        border-radius: 25px;
        background: #C4C4C4;
    }

    &-separation:not(:last-child){
        margin-right: 23px;
    }
}

.comment{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #000000;
    padding: 20px;

    &-head{
        display: flex;
        justify-content: space-between;
    }

    &-date{
        display: flex;
        align-items: center;
    }

    &-separation:not(:last-child){
        margin-bottom: 20px;
    }
}

.separation{
    margin-bottom: 38px;
}

.container-button{
    display: flex;
    justify-content: flex-end;
}
</style>