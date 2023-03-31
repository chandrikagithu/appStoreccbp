// Write your code here
import './index.css'

const TabItem = props => {
  const {eachAppDetails, updatetabId, isActive} = props
  const {displayText, tabId} = eachAppDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    updatetabId(tabId)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
