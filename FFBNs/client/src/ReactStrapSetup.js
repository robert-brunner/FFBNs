








<Card
  color="dark"
  outline
  style={{
    width: '18rem'
  }}
>
    <img className="SwipeImages" src= {userPawFiles.pawFilePic} />
  <CardBody>
    <CardTitle tag="h5">{userPawFiles.displayName}
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
        {userPawFiles.interests}
      Card subtitle
    </CardSubtitle>
    {
            <UserProfileItem key={userPawFiles.id} user={userPawFiles} setUserPawfile={setUserPawfiles} />
          }
    <Button color="warning" value={false} onClick={(e) => { DeleteSwipe(e)
        console.log("3")}} >Undo</Button>
      <Button color="danger" value={false} onClick={(e) => { handleSaveNewDisSwipe(e)
        console.log("2")}} >Scaredey-Cat</Button>
      <Button color="success" value={true} onClick={(e) => { 
        handleSaveNewSwipe(e)
          console.log("1")
          }} >Throw-a-Bone</Button>
  </CardBody>
</Card>