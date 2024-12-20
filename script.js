
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-19 13:00:00", "b": 584.2}, {"a": "2024-12-19 13:05:00", "b": 600.3333333333334}, {"a": "2024-12-19 13:10:00", "b": 598.0}, {"a": "2024-12-19 13:15:00", "b": 595.0}, {"a": "2024-12-19 13:20:00", "b": 596.2}, {"a": "2024-12-19 13:25:00", "b": 610.0}, {"a": "2024-12-19 13:30:00", "b": 618.0}, {"a": "2024-12-19 13:35:00", "b": 607.6}, {"a": "2024-12-19 13:40:00", "b": 568.2}, {"a": "2024-12-19 13:45:00", "b": 550.4}, {"a": "2024-12-19 13:50:00", "b": 562.2}, {"a": "2024-12-19 13:55:00", "b": 571.0}, {"a": "2024-12-19 14:00:00", "b": 589.75}, {"a": "2024-12-19 14:05:00", "b": 594.6}, {"a": "2024-12-19 14:10:00", "b": 633.6}, {"a": "2024-12-19 14:15:00", "b": 598.6}, {"a": "2024-12-19 14:20:00", "b": 578.8}, {"a": "2024-12-19 14:25:00", "b": 563.4}, {"a": "2024-12-19 14:30:00", "b": 576.6}, {"a": "2024-12-19 14:35:00", "b": 583.5}, {"a": "2024-12-19 14:40:00", "b": 592.6}, {"a": "2024-12-19 14:45:00", "b": 612.0}, {"a": "2024-12-19 14:50:00", "b": 586.2}, {"a": "2024-12-19 14:55:00", "b": 588.0}, {"a": "2024-12-19 15:00:00", "b": 559.0}, {"a": "2024-12-19 15:05:00", "b": 527.6}, {"a": "2024-12-19 15:10:00", "b": 529.6}, {"a": "2024-12-19 15:15:00", "b": 528.6}, {"a": "2024-12-19 15:20:00", "b": 530.2}, {"a": "2024-12-19 15:25:00", "b": 524.4}, {"a": "2024-12-19 15:30:00", "b": 525.8}, {"a": "2024-12-19 15:35:00", "b": 562.0}, {"a": "2024-12-19 15:40:00", "b": 587.6}, {"a": "2024-12-19 15:45:00", "b": 598.0}, {"a": "2024-12-19 15:50:00", "b": 603.8}, {"a": "2024-12-19 15:55:00", "b": 605.25}, {"a": "2024-12-19 16:00:00", "b": 591.4}, {"a": "2024-12-19 16:05:00", "b": 606.2}, {"a": "2024-12-19 16:10:00", "b": 578.8}, {"a": "2024-12-19 16:15:00", "b": 610.25}, {"a": "2024-12-19 16:20:00", "b": 606.4}, {"a": "2024-12-19 16:25:00", "b": 601.0}, {"a": "2024-12-19 16:30:00", "b": 639.2}, {"a": "2024-12-19 16:35:00", "b": 600.8}, {"a": "2024-12-19 16:40:00", "b": 623.4}, {"a": "2024-12-19 16:45:00", "b": 608.4}, {"a": "2024-12-19 16:50:00", "b": 609.4}, {"a": "2024-12-19 16:55:00", "b": 574.2}, {"a": "2024-12-19 17:00:00", "b": 568.4}, {"a": "2024-12-19 17:05:00", "b": 562.8}, {"a": "2024-12-19 17:10:00", "b": 590.0}, {"a": "2024-12-19 17:15:00", "b": 610.8}, {"a": "2024-12-19 17:20:00", "b": 608.4}, {"a": "2024-12-19 17:25:00", "b": 581.4}, {"a": "2024-12-19 17:30:00", "b": 602.6}, {"a": "2024-12-19 17:35:00", "b": 698.6}, {"a": "2024-12-19 17:40:00", "b": 721.2}, {"a": "2024-12-19 17:45:00", "b": 712.6}, {"a": "2024-12-19 17:50:00", "b": 715.4}, {"a": "2024-12-19 17:55:00", "b": 635.2}, {"a": "2024-12-19 18:00:00", "b": 593.4}, {"a": "2024-12-19 18:05:00", "b": 554.4}, {"a": "2024-12-19 18:10:00", "b": 555.0}, {"a": "2024-12-19 18:15:00", "b": 540.4}, {"a": "2024-12-19 18:20:00", "b": 521.5}, {"a": "2024-12-19 18:25:00", "b": 548.2}, {"a": "2024-12-19 18:30:00", "b": 567.0}, {"a": "2024-12-19 18:35:00", "b": 570.2}, {"a": "2024-12-19 18:40:00", "b": 635.6}, {"a": "2024-12-19 18:45:00", "b": 656.6}, {"a": "2024-12-19 18:50:00", "b": 676.6}, {"a": "2024-12-19 18:55:00", "b": 630.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    