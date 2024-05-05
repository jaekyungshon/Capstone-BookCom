package com.capstone.finance.Service;

import com.capstone.finance.DAO.RecommendRepository;
import com.capstone.finance.Entity.Recommend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendService {

    @Autowired
    private RecommendRepository recommenddao;

    public List<Recommend> getAllRecommends() {

        return recommenddao.getRecommends();
    }

}
