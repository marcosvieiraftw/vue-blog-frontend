import { postService } from '../_services';

export const posts = {
    namespaced: true,
    state: {
        all: {}
    },
    actions: {
        getAll({ commit }) {
            commit('getAllRequest');

            postService.getAll()
                .then(
                    posts => commit('getAllSuccess', posts),
                    error => commit('getAllFailure', error)
                );
        }
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, posts) {
            state.all = { items: posts };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    }
}
