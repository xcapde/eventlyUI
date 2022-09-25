export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid var(--color-white-contrast)',
        color: state.isFocused ? 'var(--color-main)' : 'var(--color-detail-text)',
        backgroundColor: state.isFocused ? 'var(--color-white-contrast)' : 'none',
        //   padding: 20,
    }),
    container: (provided, state) => ({
        ...provided,
        width: 'calc( var(--input-width) * 1.05)',
        minHeight: 'var(--input-height)',
    }),
    control: (provided, state) => ({
        ...provided,
        border: state.isFocused ? 'none' : 'none',
        boxShadow: state.isFocused ? 'none' : 'none',
        backgroundColor: 'var(--color-white-contrast)',
        borderRadius: 'var(--input-radius)',
        outline: state.isFocused ? 'auto' : 'none',
        outlineColor: state.isFocused ? 'var(--color-input-outline)' : 'none',
        minHeight: 'var(--input-height)',
    }),
    clearIndicator: (provided, state) => ({
        ...provided,
        // display: state.isFocused ? 'none' : 'block',
        display: 'none',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        display: 'none',
    }),
    menu:(provided, state) => ({
        ...provided,
        height: 'fit-content',
        maxHeight: '25vh',
        overflow: 'hidden',
    }),
    menuList:(provided, state)=>({
        ...provided,
        "::-webkit-scrollbar": {
            display:'none',
          }
    })
}