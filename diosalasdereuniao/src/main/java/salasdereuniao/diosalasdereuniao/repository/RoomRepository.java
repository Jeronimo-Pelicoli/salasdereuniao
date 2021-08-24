package salasdereuniao.diosalasdereuniao.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import salasdereuniao.diosalasdereuniao.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
}
