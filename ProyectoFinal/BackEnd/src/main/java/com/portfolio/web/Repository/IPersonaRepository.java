/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portfolio.web.Repository;

import com.portfolio.web.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author guido
 */
@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
