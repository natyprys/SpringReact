package com.natyprys.dsmovie.entities;

public class Score {
    private ScorePK id = new ScorePK(); 
    private Double value;

    public Score(){
    }

    public void setMovie (Movie movie){
        id.setMovie(movie);
    }

    public void setUser (User user){
        id.setUser(user);
    }

    public ScorePK getId(){
        return id;
    }

    public void setId(ScorePk id){
        this.id;
    }

    public Double getValue(){
        return value;
    }

    public void setValue(Double value){
        this.value;
    }

}
