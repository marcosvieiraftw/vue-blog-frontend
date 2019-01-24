<template>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <Navigation></Navigation>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation'
export default {
    name: 'app',
    components: {
        'Navigation': Navigation
    },
    computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    }
};
</script>