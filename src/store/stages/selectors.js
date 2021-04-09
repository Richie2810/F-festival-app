export const selectStages = state => state.stages.allStages

export const selectSingleStage = stageId => state => {
    const allStages = state.stages.allStages
    return allStages.find((stage => stage.id === parseInt(stageId)))
}