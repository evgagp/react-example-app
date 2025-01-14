declare type RootState = ReturnType<typeof store.getState>;
declare type AppDispatch = typeof store.dispatch;
declare type AppStore = typeof store;
declare type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, UnknownAction>;
