
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-05 15:00:00", "b": 428.4}, {"a": "2025-02-05 15:05:00", "b": 415.6}, {"a": "2025-02-05 15:10:00", "b": 430.0}, {"a": "2025-02-05 15:15:00", "b": 432.8}, {"a": "2025-02-05 15:20:00", "b": 426.6666666666667}, {"a": "2025-02-05 15:25:00", "b": 428.5}, {"a": "2025-02-05 15:30:00", "b": 438.25}, {"a": "2025-02-05 15:35:00", "b": 442.75}, {"a": "2025-02-05 15:40:00", "b": 433.3333333333333}, {"a": "2025-02-05 15:45:00", "b": 432.4}, {"a": "2025-02-05 15:50:00", "b": 431.0}, {"a": "2025-02-05 15:55:00", "b": 439.8}, {"a": "2025-02-05 16:00:00", "b": 438.4}, {"a": "2025-02-05 16:05:00", "b": 440.75}, {"a": "2025-02-05 16:10:00", "b": 452.0}, {"a": "2025-02-05 16:15:00", "b": 459.25}, {"a": "2025-02-05 16:20:00", "b": 447.6}, {"a": "2025-02-05 16:25:00", "b": 444.8}, {"a": "2025-02-05 16:30:00", "b": 463.2}, {"a": "2025-02-05 16:35:00", "b": 485.0}, {"a": "2025-02-05 16:40:00", "b": 504.2}, {"a": "2025-02-05 16:45:00", "b": 515.4}, {"a": "2025-02-05 16:50:00", "b": 524.2}, {"a": "2025-02-05 16:55:00", "b": 523.0}, {"a": "2025-02-05 17:00:00", "b": 537.0}, {"a": "2025-02-05 17:05:00", "b": 560.8}, {"a": "2025-02-05 17:10:00", "b": 554.6}, {"a": "2025-02-05 17:15:00", "b": 559.6666666666666}, {"a": "2025-02-05 17:20:00", "b": 573.6}, {"a": "2025-02-05 17:25:00", "b": 568.3333333333334}, {"a": "2025-02-05 17:30:00", "b": 636.6666666666666}, {"a": "2025-02-05 17:35:00", "b": 740.6}, {"a": "2025-02-05 17:40:00", "b": 686.0}, {"a": "2025-02-05 17:45:00", "b": 605.2}, {"a": "2025-02-05 17:50:00", "b": 562.2}, {"a": "2025-02-05 17:55:00", "b": 538.6}, {"a": "2025-02-05 18:00:00", "b": 538.8}, {"a": "2025-02-05 18:05:00", "b": 529.25}, {"a": "2025-02-05 18:10:00", "b": 531.8}, {"a": "2025-02-05 18:15:00", "b": 537.3333333333334}, {"a": "2025-02-05 18:20:00", "b": 534.0}, {"a": "2025-02-05 18:25:00", "b": 543.3333333333334}, {"a": "2025-02-05 18:30:00", "b": 544.3333333333334}, {"a": "2025-02-05 18:35:00", "b": 548.5}, {"a": "2025-02-05 18:40:00", "b": 549.25}, {"a": "2025-02-05 18:45:00", "b": 550.4}, {"a": "2025-02-05 18:50:00", "b": 549.0}, {"a": "2025-02-05 18:55:00", "b": 566.8}, {"a": "2025-02-05 19:00:00", "b": 597.25}, {"a": "2025-02-05 19:05:00", "b": 580.8}, {"a": "2025-02-05 19:10:00", "b": 565.0}, {"a": "2025-02-05 19:15:00", "b": 576.4}, {"a": "2025-02-05 19:20:00", "b": 578.4}, {"a": "2025-02-05 19:25:00", "b": 584.6}, {"a": "2025-02-05 19:30:00", "b": 591.0}, {"a": "2025-02-05 19:35:00", "b": 593.8}, {"a": "2025-02-05 19:40:00", "b": 614.6}, {"a": "2025-02-05 19:45:00", "b": 611.0}, {"a": "2025-02-05 19:50:00", "b": 600.3333333333334}, {"a": "2025-02-05 19:55:00", "b": 618.4}, {"a": "2025-02-05 20:00:00", "b": 634.6666666666666}, {"a": "2025-02-05 20:05:00", "b": 631.4}, {"a": "2025-02-05 20:10:00", "b": 638.2}, {"a": "2025-02-05 20:15:00", "b": 634.8}, {"a": "2025-02-05 20:20:00", "b": 641.4}, {"a": "2025-02-05 20:25:00", "b": 657.8}, {"a": "2025-02-05 20:30:00", "b": 671.25}, {"a": "2025-02-05 20:35:00", "b": 626.8}, {"a": "2025-02-05 20:40:00", "b": 614.3333333333334}, {"a": "2025-02-05 20:45:00", "b": 628.0}, {"a": "2025-02-05 20:50:00", "b": 629.75}, {"a": "2025-02-05 20:55:00", "b": 628.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    