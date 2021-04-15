export const selectStages = state => state.stages.allStages

export const selectSingleStage = stageId => state => {
    const allStages = state.stages.allStages
    return allStages.find((stage => stage.id === parseInt(stageId)))
}

export const selectStagesInActOrder = state => {
    const clonedStages = [...state.stages.allStages]
    //console.log('this is the cloned Stages', clonedStages)
    return clonedStages.sort((a,b)=> {
        return a.id - b.id
    })
}