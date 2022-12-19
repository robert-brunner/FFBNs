








<Card className="MatchCards"
  body
  outline
  style={{
    width: '18rem'
  }}
>
  {/* <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  /> */}
  <CardBody>
    <CardTitle tag="h5">
      Matches
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
    {matches.map((match) => (
                <MatchItem key={match.id} user={match} setMatch = {setMatch} />  //using key and prop
              ))}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>