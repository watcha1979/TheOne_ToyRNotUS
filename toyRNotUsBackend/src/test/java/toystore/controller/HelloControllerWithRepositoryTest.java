package toystore.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.mockito.Mock;
import toystore.UnitTests;
import toystore.domain.Hello;
import toystore.repository.Person;
import toystore.repository.PersonRepository;

import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.MockitoAnnotations.initMocks;

public class HelloControllerWithRepositoryTest {

    @Mock
    private PersonRepository personRepository;

    private HelloControllerWithRepository controller;

    @Before
    public void init(){
        initMocks(this);
        controller = new HelloControllerWithRepository(personRepository);
    }

    @Category(UnitTests.class)
    @Test
    public void shouldReturnHelloSomkiat() {
        Person somkiat = new Person("somkiat","pui");
        given(personRepository.findByFirstName("somkiat")).willReturn(Optional.of(somkiat));

        Hello hello = controller.sayHi("somkiat");
        assertEquals("Hello somkiat", hello.getMessage());
    }
}