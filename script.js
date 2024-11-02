
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-01 21:10:00", "b": 671.5}, {"a": "2024-11-01 21:15:00", "b": 685.4}, {"a": "2024-11-01 21:20:00", "b": 682.75}, {"a": "2024-11-01 21:25:00", "b": 670.2}, {"a": "2024-11-01 21:30:00", "b": 650.8}, {"a": "2024-11-01 21:35:00", "b": 647.3333333333334}, {"a": "2024-11-01 21:40:00", "b": 657.4}, {"a": "2024-11-01 21:45:00", "b": 651.75}, {"a": "2024-11-01 21:50:00", "b": 648.75}, {"a": "2024-11-01 21:55:00", "b": 649.8}, {"a": "2024-11-01 22:00:00", "b": 647.25}, {"a": "2024-11-01 22:05:00", "b": 659.0}, {"a": "2024-11-01 22:10:00", "b": 652.5}, {"a": "2024-11-01 22:15:00", "b": 613.6}, {"a": "2024-11-01 22:20:00", "b": 572.4}, {"a": "2024-11-01 22:25:00", "b": 562.4}, {"a": "2024-11-01 22:30:00", "b": 588.2}, {"a": "2024-11-01 22:35:00", "b": 585.2}, {"a": "2024-11-01 22:40:00", "b": 575.25}, {"a": "2024-11-01 22:45:00", "b": 569.4}, {"a": "2024-11-01 22:50:00", "b": 575.25}, {"a": "2024-11-01 22:55:00", "b": 569.25}, {"a": "2024-11-01 23:00:00", "b": 588.25}, {"a": "2024-11-01 23:05:00", "b": 591.2}, {"a": "2024-11-01 23:10:00", "b": 581.0}, {"a": "2024-11-01 23:15:00", "b": 578.6}, {"a": "2024-11-01 23:20:00", "b": 589.6}, {"a": "2024-11-01 23:25:00", "b": 588.8}, {"a": "2024-11-01 23:30:00", "b": 576.5}, {"a": "2024-11-01 23:35:00", "b": 578.3333333333334}, {"a": "2024-11-01 23:40:00", "b": 580.2}, {"a": "2024-11-01 23:45:00", "b": 585.75}, {"a": "2024-11-01 23:50:00", "b": 571.8}, {"a": "2024-11-01 23:55:00", "b": 549.0}, {"a": "2024-11-02 00:00:00", "b": 549.25}, {"a": "2024-11-02 00:05:00", "b": 561.75}, {"a": "2024-11-02 00:10:00", "b": 556.25}, {"a": "2024-11-02 00:15:00", "b": 556.75}, {"a": "2024-11-02 00:20:00", "b": 558.4}, {"a": "2024-11-02 00:25:00", "b": 551.6}, {"a": "2024-11-02 00:30:00", "b": 532.4}, {"a": "2024-11-02 00:35:00", "b": 540.4}, {"a": "2024-11-02 00:40:00", "b": 543.0}, {"a": "2024-11-02 00:45:00", "b": 538.8}, {"a": "2024-11-02 00:50:00", "b": 538.5}, {"a": "2024-11-02 00:55:00", "b": 539.0}, {"a": "2024-11-02 01:00:00", "b": 550.75}, {"a": "2024-11-02 01:05:00", "b": 537.6}, {"a": "2024-11-02 01:10:00", "b": 522.5}, {"a": "2024-11-02 01:15:00", "b": 521.6}, {"a": "2024-11-02 01:20:00", "b": 531.75}, {"a": "2024-11-02 01:25:00", "b": 524.6}, {"a": "2024-11-02 01:30:00", "b": 505.6}, {"a": "2024-11-02 01:35:00", "b": 499.4}, {"a": "2024-11-02 01:40:00", "b": 516.2}, {"a": "2024-11-02 01:45:00", "b": 511.25}, {"a": "2024-11-02 01:50:00", "b": 501.2}, {"a": "2024-11-02 01:55:00", "b": 501.5}, {"a": "2024-11-02 02:00:00", "b": 506.6}, {"a": "2024-11-02 02:05:00", "b": 503.0}, {"a": "2024-11-02 02:10:00", "b": 498.6}, {"a": "2024-11-02 02:15:00", "b": 493.6666666666667}, {"a": "2024-11-02 02:20:00", "b": 488.5}, {"a": "2024-11-02 02:25:00", "b": 495.6}, {"a": "2024-11-02 02:30:00", "b": 492.0}, {"a": "2024-11-02 02:35:00", "b": 493.0}, {"a": "2024-11-02 02:40:00", "b": 486.4}, {"a": "2024-11-02 02:45:00", "b": 486.3333333333333}, {"a": "2024-11-02 02:50:00", "b": 481.2}, {"a": "2024-11-02 02:55:00", "b": 483.0}, {"a": "2024-11-02 03:00:00", "b": 480.0}, {"a": "2024-11-02 03:05:00", "b": 482.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    