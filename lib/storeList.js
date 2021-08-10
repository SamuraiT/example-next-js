export const StoreList = ({stores}) =>  {
  return (
    <li style={{listStyle: 'none'}}>
      {stores.map(store => {
        return(
          <ul key={store.id}>{store.name}</ul>
        )
      })}
    </li>
  )
}
