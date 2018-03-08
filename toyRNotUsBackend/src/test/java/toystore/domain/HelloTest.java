package toystore.domain;

import org.junit.Test;
import org.junit.experimental.categories.Category;
import toystore.IntegrationTests;
import toystore.UnitTests;

import static org.junit.Assert.*;

public class HelloTest {

    @Category(UnitTests.class)
    @Test
    public void shouldReturnSomkiat() {
        Hello hello = new Hello("somkiat");
        assertEquals("somkiat",hello.getMessage());
    }
}