
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-02 15:00:00", "b": 577.6666666666666}, {"a": "2024-11-02 15:05:00", "b": 570.2}, {"a": "2024-11-02 15:10:00", "b": 575.4}, {"a": "2024-11-02 15:15:00", "b": 584.4}, {"a": "2024-11-02 15:20:00", "b": 587.2}, {"a": "2024-11-02 15:25:00", "b": 590.0}, {"a": "2024-11-02 15:30:00", "b": 569.4}, {"a": "2024-11-02 15:35:00", "b": 566.2}, {"a": "2024-11-02 15:40:00", "b": 568.8}, {"a": "2024-11-02 15:45:00", "b": 555.0}, {"a": "2024-11-02 15:50:00", "b": 552.0}, {"a": "2024-11-02 15:55:00", "b": 534.2}, {"a": "2024-11-02 16:00:00", "b": 505.8}, {"a": "2024-11-02 16:05:00", "b": 491.6}, {"a": "2024-11-02 16:10:00", "b": 488.25}, {"a": "2024-11-02 16:15:00", "b": 477.0}, {"a": "2024-11-02 16:20:00", "b": 468.5}, {"a": "2024-11-02 16:25:00", "b": 463.0}, {"a": "2024-11-02 16:30:00", "b": 468.0}, {"a": "2024-11-02 16:35:00", "b": 475.8}, {"a": "2024-11-02 16:40:00", "b": 467.0}, {"a": "2024-11-02 16:45:00", "b": 458.4}, {"a": "2024-11-02 16:50:00", "b": 469.4}, {"a": "2024-11-02 16:55:00", "b": 479.6}, {"a": "2024-11-02 17:00:00", "b": 491.2}, {"a": "2024-11-02 17:05:00", "b": 501.5}, {"a": "2024-11-02 17:10:00", "b": 489.8}, {"a": "2024-11-02 17:15:00", "b": 496.6}, {"a": "2024-11-02 17:20:00", "b": 548.6}, {"a": "2024-11-02 17:25:00", "b": 563.4}, {"a": "2024-11-02 17:30:00", "b": 510.4}, {"a": "2024-11-02 17:35:00", "b": 505.0}, {"a": "2024-11-02 17:40:00", "b": 510.0}, {"a": "2024-11-02 17:45:00", "b": 510.4}, {"a": "2024-11-02 17:50:00", "b": 516.75}, {"a": "2024-11-02 17:55:00", "b": 505.4}, {"a": "2024-11-02 18:00:00", "b": 486.0}, {"a": "2024-11-02 18:05:00", "b": 480.4}, {"a": "2024-11-02 18:10:00", "b": 483.5}, {"a": "2024-11-02 18:15:00", "b": 483.25}, {"a": "2024-11-02 18:20:00", "b": 495.25}, {"a": "2024-11-02 18:25:00", "b": 492.3333333333333}, {"a": "2024-11-02 18:30:00", "b": 487.2}, {"a": "2024-11-02 18:35:00", "b": 494.6}, {"a": "2024-11-02 18:40:00", "b": 498.0}, {"a": "2024-11-02 18:45:00", "b": 496.75}, {"a": "2024-11-02 18:50:00", "b": 523.6}, {"a": "2024-11-02 18:55:00", "b": 515.25}, {"a": "2024-11-02 19:00:00", "b": 511.6}, {"a": "2024-11-02 19:05:00", "b": 525.6}, {"a": "2024-11-02 19:10:00", "b": 530.25}, {"a": "2024-11-02 19:15:00", "b": 527.5}, {"a": "2024-11-02 19:20:00", "b": 520.4}, {"a": "2024-11-02 19:25:00", "b": 512.2}, {"a": "2024-11-02 19:30:00", "b": 533.0}, {"a": "2024-11-02 19:35:00", "b": 551.4}, {"a": "2024-11-02 19:40:00", "b": 530.6}, {"a": "2024-11-02 19:45:00", "b": 530.0}, {"a": "2024-11-02 19:50:00", "b": 541.4}, {"a": "2024-11-02 19:55:00", "b": 540.25}, {"a": "2024-11-02 20:00:00", "b": 527.2}, {"a": "2024-11-02 20:05:00", "b": 531.4}, {"a": "2024-11-02 20:10:00", "b": 525.0}, {"a": "2024-11-02 20:15:00", "b": 498.0}, {"a": "2024-11-02 20:20:00", "b": 500.6}, {"a": "2024-11-02 20:25:00", "b": 511.5}, {"a": "2024-11-02 20:30:00", "b": 550.75}, {"a": "2024-11-02 20:35:00", "b": 528.0}, {"a": "2024-11-02 20:40:00", "b": 521.2}, {"a": "2024-11-02 20:45:00", "b": 523.0}, {"a": "2024-11-02 20:50:00", "b": 536.4}, {"a": "2024-11-02 20:55:00", "b": 533.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    