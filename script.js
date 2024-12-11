
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-10 16:00:00", "b": 468.6}, {"a": "2024-12-10 16:05:00", "b": 484.0}, {"a": "2024-12-10 16:10:00", "b": 490.25}, {"a": "2024-12-10 16:15:00", "b": 502.0}, {"a": "2024-12-10 16:20:00", "b": 508.3333333333333}, {"a": "2024-12-10 16:25:00", "b": 509.0}, {"a": "2024-12-10 16:30:00", "b": 514.2}, {"a": "2024-12-10 16:35:00", "b": 515.0}, {"a": "2024-12-10 16:40:00", "b": 514.6666666666666}, {"a": "2024-12-10 16:45:00", "b": 518.5}, {"a": "2024-12-10 16:50:00", "b": 519.0}, {"a": "2024-12-10 16:55:00", "b": 526.6666666666666}, {"a": "2024-12-10 17:00:00", "b": 520.0}, {"a": "2024-12-10 17:05:00", "b": 519.0}, {"a": "2024-12-10 17:10:00", "b": 534.2}, {"a": "2024-12-10 17:15:00", "b": 532.25}, {"a": "2024-12-10 17:20:00", "b": 541.25}, {"a": "2024-12-10 17:25:00", "b": 538.2}, {"a": "2024-12-10 17:30:00", "b": 551.6}, {"a": "2024-12-10 17:35:00", "b": 559.0}, {"a": "2024-12-10 17:40:00", "b": 551.0}, {"a": "2024-12-10 17:45:00", "b": 555.3333333333334}, {"a": "2024-12-10 17:50:00", "b": 553.4}, {"a": "2024-12-10 17:55:00", "b": 555.5}, {"a": "2024-12-10 18:00:00", "b": 563.4}, {"a": "2024-12-10 18:05:00", "b": 568.4}, {"a": "2024-12-10 18:10:00", "b": 572.4}, {"a": "2024-12-10 18:15:00", "b": 579.6}, {"a": "2024-12-10 18:20:00", "b": 565.0}, {"a": "2024-12-10 18:25:00", "b": 559.0}, {"a": "2024-12-10 18:30:00", "b": 567.4}, {"a": "2024-12-10 18:35:00", "b": 563.5}, {"a": "2024-12-10 18:40:00", "b": 571.0}, {"a": "2024-12-10 18:45:00", "b": 572.8}, {"a": "2024-12-10 18:50:00", "b": 562.25}, {"a": "2024-12-10 18:55:00", "b": 570.8}, {"a": "2024-12-10 19:00:00", "b": 583.4}, {"a": "2024-12-10 19:05:00", "b": 577.0}, {"a": "2024-12-10 19:10:00", "b": 583.0}, {"a": "2024-12-10 19:15:00", "b": 593.4}, {"a": "2024-12-10 19:20:00", "b": 584.75}, {"a": "2024-12-10 19:25:00", "b": 592.0}, {"a": "2024-12-10 19:30:00", "b": 594.75}, {"a": "2024-12-10 19:35:00", "b": 596.0}, {"a": "2024-12-10 19:40:00", "b": 602.4}, {"a": "2024-12-10 19:45:00", "b": 635.2}, {"a": "2024-12-10 19:50:00", "b": 687.4}, {"a": "2024-12-10 19:55:00", "b": 670.2}, {"a": "2024-12-10 20:00:00", "b": 676.8}, {"a": "2024-12-10 20:05:00", "b": 771.0}, {"a": "2024-12-10 20:10:00", "b": 782.75}, {"a": "2024-12-10 20:15:00", "b": 748.0}, {"a": "2024-12-10 20:20:00", "b": 728.6}, {"a": "2024-12-10 20:25:00", "b": 711.2}, {"a": "2024-12-10 20:30:00", "b": 725.4}, {"a": "2024-12-10 20:35:00", "b": 728.4}, {"a": "2024-12-10 20:40:00", "b": 736.0}, {"a": "2024-12-10 20:45:00", "b": 747.25}, {"a": "2024-12-10 20:50:00", "b": 695.25}, {"a": "2024-12-10 20:55:00", "b": 645.8}, {"a": "2024-12-10 21:00:00", "b": 642.25}, {"a": "2024-12-10 21:05:00", "b": 633.6666666666666}, {"a": "2024-12-10 21:10:00", "b": 629.2}, {"a": "2024-12-10 21:15:00", "b": 638.75}, {"a": "2024-12-10 21:20:00", "b": 630.75}, {"a": "2024-12-10 21:25:00", "b": 620.25}, {"a": "2024-12-10 21:30:00", "b": 622.25}, {"a": "2024-12-10 21:35:00", "b": 613.0}, {"a": "2024-12-10 21:40:00", "b": 588.75}, {"a": "2024-12-10 21:45:00", "b": 610.0}, {"a": "2024-12-10 21:50:00", "b": 597.25}, {"a": "2024-12-10 21:55:00", "b": 593.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    