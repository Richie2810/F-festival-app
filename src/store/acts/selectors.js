export const selectActs = state => state.acts.allActs

export const SelectSingleAct = actId => state => {
    const allActs = state.acts.allActs
    return allActs.find((act => act.id === parseInt(actId)))
} 