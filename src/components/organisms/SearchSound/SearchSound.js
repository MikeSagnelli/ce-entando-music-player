import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../atoms/Input'
import SearchIcon from '../../../assets/icons/search.png'
import Loading from '../../../assets/icons/loading.gif'
import Left from '../../../assets/icons/left.png'
import Right from '../../../assets/icons/right.png'
import Play from '../../../assets/icons/play.png'
import styled from 'styled-components'
import {
  getWidthStyle,
  getSpacedAlignmentStyle,
  getMarginStyle,
  getFlexHorizontalAlignmentStyle,
  getFlexVerticalAlignmentStyle,
  getFlexDirection,
  getHeightStyle,
} from '../../../utils/styles'
import { secondsToMMSS } from '../../../utils/timeFormat'
import { CustomImage } from '../../atoms/CustomImage'
import { Title } from '../../atoms/Title'

const Container = styled.div`
  ${(props) => getWidthStyle(props)}
  ${(props) => getHeightStyle(props)}
  ${(props) => getSpacedAlignmentStyle(props)}
  ${(props) => getFlexDirection(props)}
  ${(props) => getFlexVerticalAlignmentStyle(props)}
  ${(props) => getFlexHorizontalAlignmentStyle(props)}
  ${(props) => getMarginStyle(props)}

  display: flex;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  & td,
  & th {
    text-align: left;
    padding: 8px;
  }
`

const SoundsContainer = styled(Container)`
  background-color: ${(props) => props.theme.$secondaryCompBackground};
  border-radius: 8px;
  padding: 12px 20px;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.$inputBoxShadow};
`

const Button = styled.button`
  ${(props) => getMarginStyle(props)}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

const MIN_HEIGHT = 650

const SearchSound = ({ fetchSounds, setAudio }) => {
  const [searchText, setSearchText] = useState('')
  const currentPage = useRef(1)
  const [lastPage, setLastPage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  const renderSearchResults = () => {
    if (loading) {
      return (
        <Container $alignMiddle $alignCenter>
          <CustomImage icon={Loading} />
        </Container>
      )
    }

    if (!items.length) {
      return (
        <Container $height="100%" $alignMiddle $alignCenter>
          <Title $bold $fontSize={28} $height={23} $lineHeight={23}>
            No sounds found...
          </Title>
        </Container>
      )
    }

    return (
      <Container $height="100%">
        <StyledTable>
          <thead>
            <tr>
              <th>
                <Title $bold $fontSize={22} $height={23} $lineHeight={23}>
                  Name
                </Title>
              </th>
              <th>
                <Title $bold $fontSize={22} $height={23} $lineHeight={23}>
                  Author
                </Title>
              </th>
              <th>
                <Title $bold $fontSize={22} $height={23} $lineHeight={23}>
                  Duration
                </Title>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <tr key={`${row.name}-${row.username}`}>
                <td>
                  <Title $fontSize={20} $height={23} $lineHeight={23}>
                    {row.name}
                  </Title>
                </td>
                <td>
                  <Title $fontSize={20} $height={23} $lineHeight={23}>
                    {row.username}
                  </Title>
                </td>
                <td>
                  <Title $fontSize={20} $height={23} $lineHeight={23}>
                    {secondsToMMSS(row.duration)}
                  </Title>
                </td>
                <td>
                  <Button onClick={() => setAudio(row)}>
                    <CustomImage $height={20} $width={20} icon={Play}></CustomImage>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Container>
    )
  }

  const onPrevPage = () => {
    if (currentPage === 1) return

    setLoading(true)
    setItems([])
    fetchSounds(searchText, currentPage.current - 1).then((res) => {
      setItems(res.results)
      setLoading(false)
    })
    currentPage.current -= 1
  }

  const onNextPage = () => {
    if (currentPage === lastPage) return

    setLoading(true)
    fetchSounds(searchText, currentPage.current + 1).then((res) => {
      setItems(res.results)
      setLoading(false)
    })
    currentPage.current += 1
  }

  const onSearch = (e) => {
    e.preventDefault()

    if (!searchText) return

    setLoading(true)
    fetchSounds(searchText, 1).then((res) => {
      setLastPage(Math.ceil(res.count / 15))
      setItems(res.results)
      setLoading(false)
      currentPage.current = 1
    })
  }

  const renderPages = () => {
    if (currentPage.current === 1 && currentPage.current === lastPage) {
      return (
        <Title
          $bold
          $textColor="#019688"
          $fontSize={22}
          $height={22}
          $lineHeight={22}
        >
          {currentPage.current}
        </Title>
      )
    }

    if (currentPage.current === lastPage) {
      return (
        <>
          <Title $fontSize={22} $height={22} $lineHeight={22} $marginRight={15}>
            {currentPage.current - 1}
          </Title>
          <Title
            $bold
            $textColor="#019688"
            $fontSize={22}
            $height={22}
            $lineHeight={22}
          >
            {currentPage.current}
          </Title>
        </>
      )
    }

    if (currentPage.current === 1) {
      return (
        <>
          <Title
            $bold
            $textColor="#019688"
            $fontSize={22}
            $height={22}
            $lineHeight={22}
            $marginRight={15}
          >
            {currentPage.current}
          </Title>
          <Title $fontSize={22} $height={22} $lineHeight={22}>
            {currentPage.current + 1}
          </Title>
        </>
      )
    }

    return (
      <>
        <Title $fontSize={22} $height={22} $lineHeight={22} $marginRight={15}>
          {currentPage.current - 1}
        </Title>
        <Title
          $bold
          $textColor="#019688"
          $fontSize={22}
          $height={22}
          $lineHeight={22}
          $marginRight={15}
        >
          {currentPage.current}
        </Title>
        <Title $fontSize={22} $height={22} $lineHeight={22}>
          {currentPage.current + 1}
        </Title>
      </>
    )
  }

  return (
    <>
      <form onSubmit={onSearch}>
        <Input
          text={searchText}
          placeholder="Search a sound..."
          setText={setSearchText}
          $height={52}
          $width={659}
          $fontSize={24}
          $lineHeight={28}
          $marginBottom={30}
          $regular
          $row
          $alignMiddle
          $spaceBetween
          icon={SearchIcon}
        />
      </form>
      <SoundsContainer $alignMiddle $height={MIN_HEIGHT}>
        {renderSearchResults()}
      </SoundsContainer>
      {!!items.length && (
        <Container $alignCenter $alignMiddle $marginTop={20} $row>
          {currentPage.current !== 1 && (
            <Button onClick={onPrevPage} $marginRight={15}>
              <CustomImage $height={20} $width={20} icon={Left}></CustomImage>
            </Button>
          )}
          {renderPages()}
          {currentPage.current !== lastPage && (
            <Button onClick={onNextPage} $marginLeft={15}>
              <CustomImage $height={20} $width={20} icon={Right}></CustomImage>
            </Button>
          )}
        </Container>
      )}
    </>
  )
}

SearchSound.propTypes = {
  fetchSounds: PropTypes.func,
  setAudio: PropTypes.func,
}

export default SearchSound
