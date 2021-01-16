import styled from 'styled-components';

const Container = styled.div`
  padding: 12px, 64px;
`

const ListItem = styled.div`
  padding: 8px, 16px;

  &ntn-:first-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ({ langs }) => {

    return (
      <div>
        {
          langs.map((lang, index) => {
              return <ListItem key={index}>{ lang }</ListItem>
          })
        }
      </div>
    )
  }