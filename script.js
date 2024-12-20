
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-19 10:00:00", "b": 565.25}, {"a": "2024-12-19 10:05:00", "b": 544.8}, {"a": "2024-12-19 10:10:00", "b": 531.0}, {"a": "2024-12-19 10:15:00", "b": 534.0}, {"a": "2024-12-19 10:20:00", "b": 529.0}, {"a": "2024-12-19 10:25:00", "b": 539.2}, {"a": "2024-12-19 10:30:00", "b": 538.6}, {"a": "2024-12-19 10:35:00", "b": 519.0}, {"a": "2024-12-19 10:40:00", "b": 574.0}, {"a": "2024-12-19 10:45:00", "b": 648.6}, {"a": "2024-12-19 10:50:00", "b": 593.6}, {"a": "2024-12-19 10:55:00", "b": 596.25}, {"a": "2024-12-19 11:00:00", "b": 609.0}, {"a": "2024-12-19 11:05:00", "b": 614.25}, {"a": "2024-12-19 11:10:00", "b": 730.4}, {"a": "2024-12-19 11:15:00", "b": 710.0}, {"a": "2024-12-19 11:20:00", "b": 878.0}, {"a": "2024-12-19 11:25:00", "b": 665.8}, {"a": "2024-12-19 11:30:00", "b": 738.0}, {"a": "2024-12-19 11:35:00", "b": 675.6}, {"a": "2024-12-19 11:40:00", "b": 759.6}, {"a": "2024-12-19 11:45:00", "b": 621.0}, {"a": "2024-12-19 11:50:00", "b": 623.5}, {"a": "2024-12-19 11:55:00", "b": 602.6}, {"a": "2024-12-19 12:00:00", "b": 582.4}, {"a": "2024-12-19 12:05:00", "b": 642.4}, {"a": "2024-12-19 12:10:00", "b": 627.4}, {"a": "2024-12-19 12:15:00", "b": 592.4}, {"a": "2024-12-19 12:20:00", "b": 604.75}, {"a": "2024-12-19 12:25:00", "b": 582.6}, {"a": "2024-12-19 12:30:00", "b": 605.0}, {"a": "2024-12-19 12:35:00", "b": 677.2}, {"a": "2024-12-19 12:40:00", "b": 645.0}, {"a": "2024-12-19 12:45:00", "b": 575.0}, {"a": "2024-12-19 12:50:00", "b": 556.8}, {"a": "2024-12-19 12:55:00", "b": 577.8}, {"a": "2024-12-19 13:00:00", "b": 584.2}, {"a": "2024-12-19 13:05:00", "b": 600.3333333333334}, {"a": "2024-12-19 13:10:00", "b": 598.0}, {"a": "2024-12-19 13:15:00", "b": 595.0}, {"a": "2024-12-19 13:20:00", "b": 596.2}, {"a": "2024-12-19 13:25:00", "b": 610.0}, {"a": "2024-12-19 13:30:00", "b": 618.0}, {"a": "2024-12-19 13:35:00", "b": 607.6}, {"a": "2024-12-19 13:40:00", "b": 568.2}, {"a": "2024-12-19 13:45:00", "b": 550.4}, {"a": "2024-12-19 13:50:00", "b": 562.2}, {"a": "2024-12-19 13:55:00", "b": 571.0}, {"a": "2024-12-19 14:00:00", "b": 589.75}, {"a": "2024-12-19 14:05:00", "b": 594.6}, {"a": "2024-12-19 14:10:00", "b": 633.6}, {"a": "2024-12-19 14:15:00", "b": 598.6}, {"a": "2024-12-19 14:20:00", "b": 578.8}, {"a": "2024-12-19 14:25:00", "b": 563.4}, {"a": "2024-12-19 14:30:00", "b": 576.6}, {"a": "2024-12-19 14:35:00", "b": 583.5}, {"a": "2024-12-19 14:40:00", "b": 592.6}, {"a": "2024-12-19 14:45:00", "b": 612.0}, {"a": "2024-12-19 14:50:00", "b": 586.2}, {"a": "2024-12-19 14:55:00", "b": 588.0}, {"a": "2024-12-19 15:00:00", "b": 559.0}, {"a": "2024-12-19 15:05:00", "b": 527.6}, {"a": "2024-12-19 15:10:00", "b": 529.6}, {"a": "2024-12-19 15:15:00", "b": 528.6}, {"a": "2024-12-19 15:20:00", "b": 530.2}, {"a": "2024-12-19 15:25:00", "b": 524.4}, {"a": "2024-12-19 15:30:00", "b": 525.8}, {"a": "2024-12-19 15:35:00", "b": 562.0}, {"a": "2024-12-19 15:40:00", "b": 587.6}, {"a": "2024-12-19 15:45:00", "b": 598.0}, {"a": "2024-12-19 15:50:00", "b": 603.8}, {"a": "2024-12-19 15:55:00", "b": 605.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    