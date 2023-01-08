--Select * From Dog
--Select * From Swipes

--Insert Into Swipes (DogId, OtherDogId, [Like]) VALUES (4,1,1)

--delete from swipes

--select * from dog


--select s.DogId, s.OtherDogId, s.[Like], d.Username as 'Logged in Dog', do.Username as 'Dog that Got Liked' from swipes s join dog d on s.dogId = d.Id join dog do on s.OtherDogId = do.Id WHERE s.[Like]=1

--select * from dog

SELECT do.Id AS 'Dog You Liked Id', do.UserName AS 'Dog You Liked Name'  
                                   FROM Dog d 
                             Right JOIN Swipes ON
                                        d.Id = Swipes.DogId 
                                   JOIN Dog do on Swipes.OtherDogId = do.Id 
                                  WHERE Swipes.DogId = 1 
                       INTERSECT SELECT d.Id AS     
                                        'DogWho Liked You', d.UserName AS 'Dog Who Liked You Name'  
                                   FROM Dog d 
                             Right JOIN Swipes ON
                                        d.Id = Swipes.DogId 
                                   JOIN Dog do on Swipes.OtherDogId = do.Id 
                                  WHERE Swipes.OtherDogId = 1