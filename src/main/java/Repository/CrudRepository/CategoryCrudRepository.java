package Repository.CrudRepository;

//**
/* @author guille
 */

import Model.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryCrudRepository extends CrudRepository <Category, Integer> {

}
